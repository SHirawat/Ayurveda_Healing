import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Wind, Flame, Mountain, Star, Scale, Download } from "lucide-react";
import jsPDF from 'jspdf';

const Results = () => {
  const navigate = useNavigate();
  const [assessmentData, setAssessmentData] = useState<any>(null);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    const data = localStorage.getItem('assessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    } else {
      navigate('/assessment');
    }
  }, [navigate]);

  const getDoshaResult = () => {
    // Simple logic to determine dosha based on assessment
    if (!assessmentData) return null;
    
    const { bodyFrame, digestion, stressResponse, sleepPattern } = assessmentData;
    
    let vataScore = 0;
    let pittaScore = 0;
    let kaphaScore = 0;

    // Body frame scoring
    if (bodyFrame === 'light') vataScore++;
    if (bodyFrame === 'medium') pittaScore++;
    if (bodyFrame === 'heavy') kaphaScore++;

    // Digestion scoring
    if (digestion === 'variable') vataScore++;
    if (digestion === 'strong') pittaScore++;
    if (digestion === 'slow') kaphaScore++;

    // Stress response scoring
    if (stressResponse === 'anxious') vataScore++;
    if (stressResponse === 'irritable') pittaScore++;
    if (stressResponse === 'withdrawn') kaphaScore++;

    // Sleep pattern scoring
    if (sleepPattern === 'light') vataScore++;
    if (sleepPattern === 'moderate') pittaScore++;
    if (sleepPattern === 'deep') kaphaScore++;

    const scores = [
      { dosha: 'Vata', score: vataScore, element: 'Air & Space' },
      { dosha: 'Pitta', score: pittaScore, element: 'Fire & Water' },
      { dosha: 'Kapha', score: kaphaScore, element: 'Earth & Water' }
    ];

    scores.sort((a, b) => b.score - a.score);
    
    return {
      primary: scores[0],
      secondary: scores[1]
    };
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store contact data and navigate to consultation
    localStorage.setItem('contactData', JSON.stringify(contactForm));
    navigate('/consultation');
  };

  const handleDownloadPDF = () => {
    const result = getDoshaResult();
    if (!result) return;

    const primaryDosha = getDoshaDescription(result.primary.dosha);
    
    // Create PDF using jsPDF
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("AYURVEDIC PROFILE SUMMARY", 20, 30);
    
    // Add line separator
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);
    
    // Personal Information Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Personal Information:", 20, 50);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${contactForm.fullName || 'Not provided'}`, 20, 60);
    doc.text(`Email: ${contactForm.email || 'Not provided'}`, 20, 70);
    doc.text(`Phone: ${contactForm.phone || 'Not provided'}`, 20, 80);
    
    // Dosha Profile Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Dosha Profile:", 20, 100);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Primary Dosha: ${result.primary.dosha} (${result.primary.element})`, 20, 110);
    doc.text(`Secondary Dosha: ${result.secondary.dosha} (${result.secondary.element})`, 20, 120);
    
    // Profile Description Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Profile Description:", 20, 140);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const splitDescription = doc.splitTextToSize(primaryDosha.description, 160);
    doc.text(splitDescription, 20, 150);
    
    // Strengths Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Strengths:", 20, 180);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(primaryDosha.strengths, 20, 190);
    
    // Areas for Balance Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Areas for Balance:", 20, 210);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(primaryDosha.balance, 20, 220);
    
    // Assessment Data Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Assessment Data:", 20, 240);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Body Frame: ${assessmentData?.bodyFrame || 'Not specified'}`, 20, 250);
    doc.text(`Digestion: ${assessmentData?.digestion || 'Not specified'}`, 20, 260);
    doc.text(`Stress Response: ${assessmentData?.stressResponse || 'Not specified'}`, 20, 270);
    doc.text(`Sleep Pattern: ${assessmentData?.sleepPattern || 'Not specified'}`, 20, 280);
    
    // Footer
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 290);
    
    // Save the PDF
    doc.save(`Ayurvedic_Profile_Summary_${new Date().getTime()}.pdf`);
  };

  const result = getDoshaResult();

  if (!result) return null;

  const getDoshaIcon = (dosha: string) => {
    switch (dosha) {
      case 'Vata': return <Wind className="w-6 h-6" />;
      case 'Pitta': return <Flame className="w-6 h-6" />;
      case 'Kapha': return <Mountain className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
    }
  };

  const getDoshaDescription = (dosha: string) => {
    switch (dosha) {
      case 'Vata':
        return {
          description: "This suggests a creative and energetic nature, prone to occasional restlessness and sensitivity to stress. Your strengths lie in adaptability and enthusiasm, while maintaining balance requires attention to grounding practices and managing mental energy.",
          strengths: "Creative, Energetic, Adaptable",
          balance: "Restlessness, Sensitivity to Stress"
        };
      case 'Pitta':
        return {
          description: "This indicates a focused and ambitious nature with strong digestion and leadership qualities. Your strengths include determination and intelligence, while balance requires attention to cooling practices and managing intensity.",
          strengths: "Focused, Ambitious, Intelligent",
          balance: "Intensity, Heat-related issues"
        };
      case 'Kapha':
        return {
          description: "This shows a calm and steady nature with strong immunity and endurance. Your strengths include stability and compassion, while balance requires attention to motivation and metabolic stimulation.",
          strengths: "Calm, Steady, Compassionate",
          balance: "Sluggishness, Weight management"
        };
      default:
        return {
          description: "Your profile shows a balanced constitution.",
          strengths: "Well-balanced",
          balance: "Maintaining equilibrium"
        };
    }
  };

  const primaryDosha = getDoshaDescription(result.primary.dosha);

  return (
    <div className="min-h-screen bg-gradient-warm py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground">
            Your Ayurvedic Profile Results
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Results Section */}
          <div className="space-y-8">
            <Card className="border-0 shadow-warm animate-slide-up">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Based on your responses, your Ayurvedic profile is predominantly{" "}
                    <span className="font-semibold text-ayur-bronze">{result.primary.dosha}</span>{" "}
                    with a secondary influence of{" "}
                    <span className="font-semibold text-ayur-bronze">{result.secondary.dosha}</span>.
                  </p>
                  <p className="text-muted-foreground">
                    {primaryDosha.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="border-0 shadow-soft animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-ayur-cream rounded-lg flex items-center justify-center text-ayur-bronze">
                      {getDoshaIcon(result.primary.dosha)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Dosha Profile</h3>
                      <p className="text-sm text-muted-foreground">
                        {result.primary.dosha} ({result.primary.element}): Dominant
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-ayur-cream rounded-lg flex items-center justify-center text-ayur-bronze">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Secondary Dosha</h3>
                      <p className="text-sm text-muted-foreground">
                        {result.secondary.dosha} ({result.secondary.element}): Secondary
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-ayur-cream rounded-lg flex items-center justify-center text-ayur-bronze">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Strengths</h3>
                      <p className="text-sm text-muted-foreground">
                        {primaryDosha.strengths}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-ayur-cream rounded-lg flex items-center justify-center text-ayur-bronze">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Areas for Balance</h3>
                      <p className="text-sm text-muted-foreground">
                        {primaryDosha.balance}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Section */}
          <div className="animate-slide-up">
            <Card className="border-0 shadow-warm sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Unlock Your Personalized Plan
                </CardTitle>
                <p className="text-muted-foreground">
                  Enter your details to receive a customized wellness plan, including diet, lifestyle, and herbal recommendations.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm(prev => ({ ...prev, fullName: e.target.value }))}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-1"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-bronze hover:opacity-90 text-white py-6 text-lg font-semibold shadow-warm mt-6"
                  >
                    Get My Wellness Plan
                  </Button>
                </form>
                
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="w-full mt-3 py-3 border-ayur-bronze text-ayur-bronze hover:bg-ayur-cream"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Summary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
