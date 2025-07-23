import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Tv, Wrench, Clock, Shield, CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
});

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Имитация отправки заявки
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              TV Ремонт
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональный ремонт телевизоров в Москве
            </p>
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
              <Phone className="h-6 w-6" />
              <a href="tel:+74953630139" className="hover:underline">
                +7 (495) 363-01-39
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Tv className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  Быстро и качественно
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ремонт всех марок телевизоров</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Выезд мастера на дом</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Оригинальные запчасти</span>
                </div>
              </div>
            </div>
            
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Оставить заявку</CardTitle>
                <CardDescription className="text-center">
                  Мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ваше имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Введите ваше имя" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Номер телефона</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+7 (999) 123-45-67" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Отправляем..." : "Оставить заявку"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Диагностика</h3>
                <p className="text-muted-foreground">
                  Бесплатная диагностика неисправностей вашего телевизора
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Быстрый ремонт</h3>
                <p className="text-muted-foreground">
                  Большинство ремонтов выполняем в день обращения
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
                <p className="text-muted-foreground">
                  Предоставляем гарантию на все виды выполненных работ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Свяжитесь с нами
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Phone className="h-8 w-8 text-primary" />
            <a 
              href="tel:+74953630139" 
              className="text-3xl font-bold text-primary hover:underline"
            >
              +7 (495) 363-01-39
            </a>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работаем ежедневно с 8:00 до 22:00. Выезд мастера в любое удобное для вас время.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
