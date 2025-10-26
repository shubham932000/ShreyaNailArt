import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

const services = [
  'Classic Manicure',
  'Luxury Gel Nails',
  'Nail Art Design',
  'Spa Pedicure'
];

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Fetch booked slots when date changes
  useEffect(() => {
    if (!date) return;

    const fetchBookedSlots = async () => {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const { data, error } = await supabase
        .from('bookings')
        .select('booking_time')
        .eq('booking_date', formattedDate);

      if (error) {
        console.error('Error fetching bookings:', error);
        return;
      }

      const slots = new Set(data.map(booking => booking.booking_time));
      setBookedSlots(slots);
    };

    fetchBookedSlots();
  }, [date]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !selectedService || !name || !email || !phone) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const formattedDate = format(date, 'yyyy-MM-dd');

      // Save booking to database
      const { error: insertError } = await supabase
        .from('bookings')
        .insert({
          name,
          email,
          phone,
          service: selectedService,
          booking_date: formattedDate,
          booking_time: selectedTime,
        });

      if (insertError) {
        toast.error('Failed to save booking. Please try again.');
        console.error('Insert error:', insertError);
        setIsLoading(false);
        return;
      }

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-booking-confirmation', {
        body: {
          name,
          email,
          phone,
          service: selectedService,
          bookingDate: formattedDate,
          bookingTime: selectedTime,
        },
      });

      if (emailError) {
        console.error('Email error:', emailError);
        toast.success('Booking confirmed! (Email notification failed, but your booking is saved)');
      } else {
        toast.success('Booking confirmed! Check your email for details! 🎉');
      }

      // Reset form
      setDate(undefined);
      setSelectedTime('');
      setSelectedService('');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Book Your Appointment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your spot and let us pamper you
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/80 backdrop-blur-sm animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="transition-all focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="transition-all focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="transition-all focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="transition-all focus:scale-105">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal transition-all hover:scale-105",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Available Time Slots
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => {
                      const isBooked = bookedSlots.has(time);
                      return (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            "transition-all hover:scale-105",
                            selectedTime === time && "bg-primary",
                            isBooked && "opacity-50 cursor-not-allowed"
                          )}
                          onClick={() => !isBooked && setSelectedTime(time)}
                          disabled={isBooked}
                        >
                          {time}
                          {isBooked && " (Booked)"}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
