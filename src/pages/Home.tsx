import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Sparkles, Leaf, MapPin, User, Stethoscope } from "lucide-react";
import heroImage from "@/assets/ayurveda-hero.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-ayur-bronze" />,
      title: "Personalized Insights",
      description: "Receive tailored recommendations based on your unique Ayurvedic profile."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-ayur-bronze" />,
      title: "Holistic Approach",
      description: "Address the root causes of imbalances for long-term well-being."
    },
    {
      icon: <Users className="w-8 h-8 text-ayur-bronze" />,
      title: "Community Support",
      description: "Connect with like-minded individuals on a similar wellness journey."
    }
  ];

  const doshas = [
    {
      name: "Vata",
      element: "Air & Space",
      description: "Governs movement, breathing, circulation, and nervous system functions.",
      characteristics: ["Creative", "Energetic", "Quick thinking", "Variable appetite"]
    },
    {
      name: "Pitta", 
      element: "Fire & Water",
      description: "Controls digestion, metabolism, and body temperature regulation.",
      characteristics: ["Focused", "Determined", "Strong appetite", "Natural leader"]
    },
    {
      name: "Kapha",
      element: "Earth & Water", 
      description: "Provides structure, immunity, and emotional stability to the body.",
      characteristics: ["Calm", "Loyal", "Strong immunity", "Steady energy"]
    }
  ];

  const vaidyas = [
    {
      name: "Dr. Priya Nair",
      specialization: "Panchakarma & Detox",
      experience: "15+ years",
      description: "Expert in traditional detoxification therapies and rejuvenation treatments."
    },
    {
      name: "Dr. Raj Kumar",
      specialization: "Rasayana & Anti-aging",
      experience: "20+ years", 
      description: "Specialist in longevity therapies and immune system strengthening."
    },
    {
      name: "Dr. Meera Krishnan",
      specialization: "Women's Health",
      experience: "12+ years",
      description: "Focused on hormonal balance and reproductive health through Ayurveda."
    }
  ];

  const treatments = [
    {
      name: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy",
      duration: "7-21 days"
    },
    {
      name: "Abhyanga",
      description: "Full body oil massage for relaxation and circulation",
      duration: "60-90 minutes"
    },
    {
      name: "Shirodhara",
      description: "Continuous oil pouring for mental clarity and stress relief", 
      duration: "45-60 minutes"
    },
    {
      name: "Swedana",
      description: "Herbal steam therapy for toxin elimination",
      duration: "30-45 minutes"
    }
  ];

  const centers = [
    {
      name: "CGH Earth Marari Beach",
      location: "Mararikulam, Kerala",
      description: "Beachfront wellness retreat with traditional Kerala architecture",
      features: ["Ocean view therapy rooms", "Organic herb garden", "Yoga pavilion"]
    },
    {
      name: "CGH Earth Kumarakom Lake Resort", 
      location: "Kumarakom, Kerala",
      description: "Lakeside sanctuary surrounded by backwaters and nature",
      features: ["Water villa treatments", "Meditation gardens", "Ayurvedic kitchen"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80" />
        
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-slide-up">
            Discover Your Ayurvedic Path to Wellness
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Unlock personalized health insights with our Ayurvedic questionnaires.
            Understand your unique mind-body constitution and embark on a journey
            towards holistic well-being.
          </p>
          
          <Button
            size="lg"
            className="bg-ayur-bronze hover:bg-ayur-bronze-light text-white px-8 py-6 text-lg font-semibold shadow-warm animate-fade-in"
            onClick={() => navigate("/assessment")}
          >
            Take the Questionnaire
          </Button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Choose AyurVeda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our app combines ancient wisdom with modern technology to provide you with
              accurate and actionable insights into your health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="text-center p-8 border-0 shadow-soft bg-card hover:shadow-warm transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-ayur-cream rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Ayurveda Section */}
      <section className="py-20 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-foreground font-serif">
                What is Ayurveda?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ayurveda, the ancient science of life, recognizes that each individual has a unique constitution 
              determined by three fundamental energies called Doshas. Understanding your Dosha helps create 
              a personalized path to optimal health and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doshas.map((dosha, index) => (
              <Card 
                key={index}
                className="text-center p-8 border border-emerald-100 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="space-y-6 p-0">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">{dosha.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-serif mb-2">
                      {dosha.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-4">{dosha.element}</p>
                    <p className="text-muted-foreground mb-6">{dosha.description}</p>
                    <div className="space-y-2">
                      {dosha.characteristics.map((char, i) => (
                        <span key={i} className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm mx-1">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vaidyas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <User className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-foreground font-serif">
                Our Vaidyas
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced Ayurvedic physicians who guide you on your wellness journey 
              with ancient wisdom and modern understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vaidyas.map((vaidya, index) => (
              <Card 
                key={index}
                className="text-center p-6 border border-emerald-100 shadow-lg bg-gradient-to-b from-white to-emerald-50/30 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-serif">
                    {vaidya.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">{vaidya.specialization}</p>
                  <p className="text-sm text-emerald-500">{vaidya.experience}</p>
                  <p className="text-muted-foreground text-sm">
                    {vaidya.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Stethoscope className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-foreground font-serif">
                Our Treatments
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience authentic Ayurvedic therapies designed to restore balance, 
              eliminate toxins, and rejuvenate your body and mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <Card 
                key={index}
                className="p-6 border border-emerald-100 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-serif">
                    {treatment.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {treatment.description}
                  </p>
                  <p className="text-emerald-600 text-sm font-medium">
                    Duration: {treatment.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Centers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-8 h-8 text-emerald-600" />
              <h2 className="text-4xl font-bold text-foreground font-serif">
                Treatment Centres
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our serene wellness centers in Kerala, where traditional architecture 
              meets natural beauty to create the perfect healing environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {centers.map((center, index) => (
              <Card 
                key={index}
                className="p-8 border border-emerald-100 shadow-lg bg-gradient-to-br from-white to-emerald-50/20 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-serif">
                        {center.name}
                      </h3>
                      <p className="text-emerald-600 text-sm">{center.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {center.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    {center.features.map((feature, i) => (
                      <span key={i} className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-6">
          <h2 className="text-4xl font-bold text-foreground font-serif">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards a healthier, more balanced you. Our questionnaires are
            designed to be insightful and easy to complete.
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/assessment")}
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;