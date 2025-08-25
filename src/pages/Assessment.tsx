import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    wellnessGoal: "",
    bodyFrame: "",
    digestion: "",
    stressResponse: "",
    sleepPattern: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store assessment data in localStorage for results page
    localStorage.setItem('assessmentData', JSON.stringify(formData));
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">
            Your Ayurvedic Wellness Journey
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete this short assessment to discover your unique mind-body type
            and receive personalized wellness recommendations.
          </p>
        </div>

        <Card className="shadow-warm border-0 animate-slide-up">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-center text-foreground">
              Assessment Questionnaire
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Wellness Goal */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What is your primary wellness goal?
                </label>
                <Input
                  placeholder="e.g., Increase energy, reduce stress, improve digestion"
                  value={formData.wellnessGoal}
                  onChange={(e) => setFormData(prev => ({ ...prev, wellnessGoal: e.target.value }))}
                  className="border-border focus:ring-primary"
                  required
                />
              </div>

              {/* Body Frame */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What is your natural body frame?
                </label>
                <Select 
                  value={formData.bodyFrame} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, bodyFrame: value }))}
                  required
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light and lean</SelectItem>
                    <SelectItem value="medium">Medium build</SelectItem>
                    <SelectItem value="heavy">Heavy and solid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Digestion */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  How is your digestion typically?
                </label>
                <Select 
                  value={formData.digestion} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, digestion: value }))}
                  required
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="variable">Variable, sometimes bloated</SelectItem>
                    <SelectItem value="strong">Strong, I can eat anything</SelectItem>
                    <SelectItem value="slow">Slow but steady</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stress Response */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  How do you respond to stress?
                </label>
                <Select 
                  value={formData.stressResponse} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, stressResponse: value }))}
                  required
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anxious">I become anxious and worried</SelectItem>
                    <SelectItem value="irritable">I become irritable and angry</SelectItem>
                    <SelectItem value="withdrawn">I withdraw and become sluggish</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sleep Pattern */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What is your typical sleep pattern?
                </label>
                <Select 
                  value={formData.sleepPattern} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, sleepPattern: value }))}
                  required
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light sleep, easily disturbed</SelectItem>
                    <SelectItem value="moderate">Moderate sleep, wake up refreshed</SelectItem>
                    <SelectItem value="deep">Deep sleep, hard to wake up</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-ayur-orange hover:opacity-90 text-white py-6 text-lg font-semibold shadow-warm"
              >
                Discover My Dosha
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4">
            {[
              {
                question: "What is Ayurveda?",
                answer: "Ayurveda is an ancient Indian system of medicine that focuses on balancing mind, body, and spirit for optimal health."
              },
              {
                question: "What are Doshas?",
                answer: "Doshas are the three fundamental energies (Vata, Pitta, Kapha) that govern all biological and physiological functions."
              },
              {
                question: "How does this assessment work?",
                answer: "Our assessment analyzes your responses to determine your primary dosha and provides personalized recommendations."
              },
              {
                question: "Is this a medical diagnosis?",
                answer: "No, this is an educational tool. Always consult with healthcare professionals for medical concerns."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer text-foreground font-medium">
                      {faq.question}
                      <span className="text-ayur-orange group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;