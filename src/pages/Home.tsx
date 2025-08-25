import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Sparkles } from "lucide-react";
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

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards a healthier, more balanced you. Our questionnaires are
            designed to be insightful and easy to complete.
          </p>
          <Button
            size="lg"
            className="bg-gradient-bronze hover:opacity-90 text-white px-8 py-6 text-lg font-semibold shadow-warm"
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