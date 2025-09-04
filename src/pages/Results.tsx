import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Wind, Flame, Mountain, Star, Scale, Download } from "lucide-react";
import jsPDF from 'jspdf';
import ayurvedaFoods from "@/assets/ayurveda-foods.jpg";
import cghLogoIcon from "@/assets/cgh-logo-icon.jpg";

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
    
    // Set background color for the entire page
    doc.setFillColor(248, 250, 252); // Light gray background
    doc.rect(0, 0, 210, 297, 'F');
    
    // Add header background
    doc.setFillColor(34, 68, 51); // Deep green header
    doc.rect(0, 0, 210, 50, 'F');
    
    // Add logo (placeholder circle for now)
    doc.setFillColor(255, 255, 255);
    doc.circle(30, 25, 12, 'F');
    doc.setFillColor(34, 68, 51);
    doc.circle(30, 25, 8, 'F');
    
    // Add main title in header
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("CGH EARTH AYURVEDA", 50, 20);
    
    // Add subtitle
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Ayurvedic Profile Summary", 50, 30);
    
    // Add tagline
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Health in Totality", 50, 40);
    
    // Reset text color for body content
    doc.setTextColor(51, 65, 85); // Dark gray
    
    // Add decorative line
    doc.setLineWidth(2);
    doc.setDrawColor(139, 69, 19); // Bronze color
    doc.line(20, 60, 190, 60);
    
    // Personal Information Section with box
    doc.setFillColor(255, 251, 235); // Warm cream background
    doc.rect(15, 70, 180, 35, 'F');
    doc.setDrawColor(139, 69, 19);
    doc.setLineWidth(0.5);
    doc.rect(15, 70, 180, 35, 'S');
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(139, 69, 19); // Bronze
    doc.text("Personal Information", 20, 80);
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text(`Name: ${contactForm.fullName || 'Not provided'}`, 20, 88);
    doc.text(`Email: ${contactForm.email || 'Not provided'}`, 20, 95);
    doc.text(`Phone: ${contactForm.phone || 'Not provided'}`, 20, 102);
    
    // Dosha Profile Section with gradient-like effect
    doc.setFillColor(240, 253, 244); // Light green
    doc.rect(15, 115, 180, 45, 'F');
    doc.setDrawColor(34, 197, 94);
    doc.rect(15, 115, 180, 45, 'S');
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 101, 52); // Dark green
    doc.text("Your Dosha Profile", 20, 125);
    
    // Add dosha icons (simple shapes)
    doc.setFillColor(139, 69, 19);
    doc.circle(25, 138, 4, 'F'); // Primary dosha icon
    doc.setFillColor(107, 114, 128);
    doc.circle(25, 150, 3, 'F'); // Secondary dosha icon
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(51, 65, 85);
    doc.text(`Primary: ${result.primary.dosha} (${result.primary.element})`, 35, 140);
    doc.text(`Secondary: ${result.secondary.dosha} (${result.secondary.element})`, 35, 152);
    
    // Profile Description Section
    doc.setFillColor(254, 249, 195); // Light yellow
    doc.rect(15, 170, 180, 50, 'F');
    doc.setDrawColor(251, 191, 36);
    doc.rect(15, 170, 180, 50, 'S');
    
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(180, 83, 9); // Orange
    doc.text("Profile Description", 20, 180);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    const splitDescription = doc.splitTextToSize(primaryDosha.description, 160);
    doc.text(splitDescription, 20, 188);
    
    // Strengths and Balance sections side by side
    // Strengths Section
    doc.setFillColor(220, 252, 231); // Light green
    doc.rect(15, 230, 85, 30, 'F');
    doc.setDrawColor(34, 197, 94);
    doc.rect(15, 230, 85, 30, 'S');
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 101, 52);
    doc.text("Strengths", 20, 240);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    const splitStrengths = doc.splitTextToSize(primaryDosha.strengths, 75);
    doc.text(splitStrengths, 20, 248);
    
    // Areas for Balance Section
    doc.setFillColor(254, 226, 226); // Light red
    doc.rect(110, 230, 85, 30, 'F');
    doc.setDrawColor(239, 68, 68);
    doc.rect(110, 230, 85, 30, 'S');
    
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(185, 28, 28);
    doc.text("Areas for Balance", 115, 240);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    const splitBalance = doc.splitTextToSize(primaryDosha.balance, 75);
    doc.text(splitBalance, 115, 248);
    
    // Assessment Data Section
    doc.setFillColor(243, 244, 246); // Light gray
    doc.rect(15, 270, 180, 20, 'F');
    doc.setDrawColor(156, 163, 175);
    doc.rect(15, 270, 180, 20, 'S');
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(75, 85, 99);
    doc.text("Assessment Data", 20, 278);
    
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(`Body Frame: ${assessmentData?.bodyFrame || 'Not specified'} | Digestion: ${assessmentData?.digestion || 'Not specified'}`, 20, 285);
    
    // Footer with branding
    doc.setFillColor(34, 68, 51); // Dark green footer
    doc.rect(0, 287, 210, 10, 'F');
    
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(255, 255, 255);
    doc.text(`Generated on: ${new Date().toLocaleDateString()} | CGH Earth Ayurveda - Treating the Source, Not the Symptom`, 20, 293);
    
    // Save the PDF
    doc.save(`CGH_Earth_Ayurveda_Profile_${new Date().getTime()}.pdf`);
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/88b0f847-3165-4711-b9d1-33072d053667.png" 
              alt="CGH Earth Ayurveda" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-4xl font-bold text-emerald-700 font-serif">
                Your Ayurvedic Profile
              </h1>
              <p className="text-emerald-600 font-medium">
                CGH Earth Ayurveda
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Health in Totality - Treating the Source, Not the Symptom
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Results Section */}
          <div className="space-y-8">
            <Card className="border border-emerald-100 shadow-lg animate-slide-up">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Based on your responses, your Ayurvedic profile is predominantly{" "}
                    <span className="font-semibold text-emerald-700">{result.primary.dosha}</span>{" "}
                    with a secondary influence of{" "}
                    <span className="font-semibold text-emerald-700">{result.secondary.dosha}</span>.
                  </p>
                  <p className="text-muted-foreground">
                    {primaryDosha.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="border border-emerald-100 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
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
            <Card className="border border-emerald-100 shadow-lg sticky top-8">
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
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold shadow-lg mt-6"
                  >
                    Get My Wellness Plan
                  </Button>
                </form>
                
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="w-full mt-3 py-3 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
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
