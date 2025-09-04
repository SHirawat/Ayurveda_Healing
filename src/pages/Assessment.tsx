import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Diamond } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    // Physical Characteristics
    bodyFrame: "",
    weightTrend: "", 
    skinType: "",
    hairType: "",
    eyeType: "",
    bodyTemperature: "",
    joints: "",
    // Digestion & Appetite
    appetite: "",
    digestion: "",
    cravings: "",
    skippingMeals: "",
    // Sleep & Energy
    sleep: "",
    energyPattern: "",
    fatigue: "",
    // Mental & Emotional Traits
    learning: "",
    focus: "",
    stressResponse: "",
    emotionalDefault: "",
    // Lifestyle & Habits
    climate: "",
    speech: "",
    movement: "",
    preferences: ""
  });

  const sections = [
    {
      title: "Physical Characteristics",
      icon: "🧬",
      questions: [
        {
          key: "bodyFrame",
          question: "What is your natural body frame (slim/light, medium/muscular, broad/heavy)?",
          options: [
            { value: "vata", label: "Slim/light - naturally thin, hard to gain weight" },
            { value: "pitta", label: "Medium/muscular - moderate build, athletic" },
            { value: "kapha", label: "Broad/heavy - solid build, gain weight easily" }
          ]
        },
        {
          key: "weightTrend", 
          question: "How is your weight trend—do you gain/lose easily or is it stable?",
          options: [
            { value: "vata", label: "Lose weight easily, hard to gain" },
            { value: "pitta", label: "Stable weight, moderate changes" },
            { value: "kapha", label: "Gain weight easily, hard to lose" }
          ]
        },
        {
          key: "skinType",
          question: "What is your skin type—dry/rough, warm/reddish, soft/oily, or mixed?",
          options: [
            { value: "vata", label: "Dry, rough, cool, thin" },
            { value: "pitta", label: "Warm, reddish, prone to irritation" },
            { value: "kapha", label: "Soft, oily, smooth, thick" }
          ]
        },
        {
          key: "hairType",
          question: "How is your hair—thin, coarse, frizzy; fine, straight, prone to early graying; thick, oily, lustrous?",
          options: [
            { value: "vata", label: "Thin, coarse, frizzy, dry" },
            { value: "pitta", label: "Fine, straight, early graying/thinning" },
            { value: "kapha", label: "Thick, oily, lustrous, wavy" }
          ]
        },
        {
          key: "eyeType",
          question: "How are your eyes—small/dry, sharp/penetrating, large/soft?",
          options: [
            { value: "vata", label: "Small, dry, quick moving" },
            { value: "pitta", label: "Sharp, penetrating, intense" },
            { value: "kapha", label: "Large, soft, attractive" }
          ]
        },
        {
          key: "bodyTemperature",
          question: "What is your body temperature—tend to feel cold, warm/hot, or cool/stable?",
          options: [
            { value: "vata", label: "Feel cold, cold hands/feet" },
            { value: "pitta", label: "Feel warm/hot, dislike heat" },
            { value: "kapha", label: "Cool but comfortable" }
          ]
        },
        {
          key: "joints",
          question: "How are your joints—flexible/cracking, normal/sturdy, large/stable but sometimes stiff?",
          options: [
            { value: "vata", label: "Flexible, crack easily, prominent" },
            { value: "pitta", label: "Normal, sturdy, moderate" },
            { value: "kapha", label: "Large, stable, sometimes stiff" }
          ]
        }
      ]
    },
    {
      title: "Digestion & Appetite", 
      icon: "🍽️",
      questions: [
        {
          key: "appetite",
          question: "How is your appetite—variable, sharp/strong, or steady/sluggish?",
          options: [
            { value: "vata", label: "Variable, irregular, forget to eat" },
            { value: "pitta", label: "Sharp, strong, get irritable when hungry" },
            { value: "kapha", label: "Steady, can skip meals easily" }
          ]
        },
        {
          key: "digestion",
          question: "How is your digestion—gas/bloating, acidity/loose stools, or heaviness/slow bowels?",
          options: [
            { value: "vata", label: "Gas, bloating, irregular" },
            { value: "pitta", label: "Acidity, loose stools, quick" },
            { value: "kapha", label: "Heaviness, slow, sluggish" }
          ]
        },
        {
          key: "cravings",
          question: "Do you crave sweet, salty, pungent, sour, or heavy foods more often?",
          options: [
            { value: "vata", label: "Sweet, salty, warm foods" },
            { value: "pitta", label: "Sweet, bitter, cool foods" },
            { value: "kapha", label: "Pungent, bitter, spicy foods" }
          ]
        },
        {
          key: "skippingMeals",
          question: "How do you react to skipping meals—fine, irritable, or sluggish/heavy?",
          options: [
            { value: "vata", label: "Fine, often forget to eat" },
            { value: "pitta", label: "Irritable, angry, uncomfortable" },
            { value: "kapha", label: "Comfortable, can go long without food" }
          ]
        }
      ]
    },
    {
      title: "Sleep & Energy",
      icon: "😴", 
      questions: [
        {
          key: "sleep",
          question: "How is your sleep—light/interrupted, moderate, or heavy/deep?",
          options: [
            { value: "vata", label: "Light, interrupted, difficulty falling asleep" },
            { value: "pitta", label: "Moderate, wake up refreshed" },
            { value: "kapha", label: "Heavy, deep, hard to wake up" }
          ]
        },
        {
          key: "energyPattern",
          question: "What is your energy pattern—fluctuating bursts, intense/sustained, or steady but slow?",
          options: [
            { value: "vata", label: "Fluctuating, bursts of energy then tired" },
            { value: "pitta", label: "Intense, sustained, focused" },
            { value: "kapha", label: "Steady but slow, consistent" }
          ]
        },
        {
          key: "fatigue",
          question: "Do you tire more physically, mentally, or emotionally?",
          options: [
            { value: "vata", label: "Emotionally and nervously" },
            { value: "pitta", label: "Mentally from overwork" },
            { value: "kapha", label: "Physically from inactivity" }
          ]
        }
      ]
    },
    {
      title: "Mental & Emotional Traits",
      icon: "🧠",
      questions: [
        {
          key: "learning",
          question: "Do you learn quickly but forget fast, learn moderately with retention, or learn slowly but retain well?",
          options: [
            { value: "vata", label: "Learn quickly but forget fast" },
            { value: "pitta", label: "Learn moderately with good retention" },
            { value: "kapha", label: "Learn slowly but retain very well" }
          ]
        },
        {
          key: "focus",
          question: "How is your focus—scattered, sharp/intense, or calm/steady?",
          options: [
            { value: "vata", label: "Scattered, many ideas at once" },
            { value: "pitta", label: "Sharp, intense, focused" },
            { value: "kapha", label: "Calm, steady, methodical" }
          ]
        },
        {
          key: "stressResponse",
          question: "How do you handle stress—anxiety/fear, irritability/anger, or withdrawal/depression?",
          options: [
            { value: "vata", label: "Anxiety, fear, worry" },
            { value: "pitta", label: "Irritability, anger, frustration" },
            { value: "kapha", label: "Withdrawal, depression, attachment" }
          ]
        },
        {
          key: "emotionalDefault",
          question: "What is your emotional default—worry, judgment, or attachment?",
          options: [
            { value: "vata", label: "Worry, anxiety, changeable moods" },
            { value: "pitta", label: "Judgment, criticism, intensity" },
            { value: "kapha", label: "Attachment, resistance to change" }
          ]
        }
      ]
    },
    {
      title: "Lifestyle & Habits",
      icon: "🌱",
      questions: [
        {
          key: "climate",
          question: "Do you prefer warm/dry climates, cool environments, or warm/humid ones?",
          options: [
            { value: "vata", label: "Warm, humid, dislike cold/wind" },
            { value: "pitta", label: "Cool, dislike heat and sun" },
            { value: "kapha", label: "Warm, dry, dislike cold/damp" }
          ]
        },
        {
          key: "speech",
          question: "How is your speech—fast/animated, sharp/precise, or slow/deep?",
          options: [
            { value: "vata", label: "Fast, animated, talkative" },
            { value: "pitta", label: "Sharp, precise, articulate" },
            { value: "kapha", label: "Slow, deep, measured" }
          ]
        },
        {
          key: "movement",
          question: "How do you move—quick/light, purposeful, or slow/graceful?",
          options: [
            { value: "vata", label: "Quick, light, restless" },
            { value: "pitta", label: "Purposeful, determined, focused" },
            { value: "kapha", label: "Slow, graceful, steady" }
          ]
        },
        {
          key: "preferences",
          question: "Do you prefer variety and change, order and achievement, or comfort and routine?",
          options: [
            { value: "vata", label: "Variety, change, new experiences" },
            { value: "pitta", label: "Order, achievement, goals" },
            { value: "kapha", label: "Comfort, routine, stability" }
          ]
        }
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Calculate dosha scores
    const doshaScores = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(formData).forEach(value => {
      if (value && doshaScores.hasOwnProperty(value)) {
        doshaScores[value as keyof typeof doshaScores]++;
      }
    });

    // Store assessment data with scores in localStorage for results page
    localStorage.setItem('assessmentData', JSON.stringify({
      formData,
      doshaScores,
      primaryDosha: Object.entries(doshaScores).reduce((a, b) => doshaScores[a[0] as keyof typeof doshaScores] > doshaScores[b[0] as keyof typeof doshaScores] ? a : b)[0]
    }));
    navigate("/results");
  };

  const handleAnswerChange = (questionKey: string, value: string) => {
    setFormData(prev => ({ ...prev, [questionKey]: value }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const getCurrentSectionAnsweredCount = () => {
    const currentQuestions = sections[currentSection].questions;
    return currentQuestions.filter(q => formData[q.key as keyof typeof formData]).length;
  };

  const isCurrentSectionComplete = () => {
    return getCurrentSectionAnsweredCount() === sections[currentSection].questions.length;
  };

  const getTotalAnsweredCount = () => {
    return Object.values(formData).filter(value => value !== "").length;
  };

  const getTotalQuestions = () => {
    return sections.reduce((total, section) => total + section.questions.length, 0);
  };

  const progressPercentage = (getTotalAnsweredCount() / getTotalQuestions()) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground font-serif">
            Ayurvedic Constitution Assessment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your unique dosha constitution through this comprehensive questionnaire. 
            Answer each question based on what feels most natural to you.
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{getTotalAnsweredCount()}/{getTotalQuestions()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  index === currentSection
                    ? 'bg-emerald-600 text-white'
                    : index < currentSection && sections[index].questions.every(q => formData[q.key as keyof typeof formData])
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Section */}
        <Card className="shadow-lg border border-emerald-100 animate-slide-up">
          <CardHeader className="pb-6 bg-gradient-to-r from-emerald-50 to-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{sections[currentSection].icon}</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground font-serif">
                  {sections[currentSection].title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {getCurrentSectionAnsweredCount()}/{sections[currentSection].questions.length} completed
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8 p-8">
            {sections[currentSection].questions.map((question, questionIndex) => (
              <div key={question.key} className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm mt-1">
                    {questionIndex + 1}
                  </div>
                  <div className="flex-1">
                    <label className="text-base font-medium text-foreground leading-relaxed">
                      {question.question}
                    </label>
                    <div className="mt-3">
                      <Select 
                        value={formData[question.key as keyof typeof formData]} 
                        onValueChange={(value) => handleAnswerChange(question.key, value)}
                      >
                        <SelectTrigger className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="Choose the option that best describes you" />
                        </SelectTrigger>
                        <SelectContent>
                          {question.options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-emerald-100">
              <Button
                type="button"
                variant="outline"
                onClick={prevSection}
                disabled={currentSection === 0}
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              >
                Previous Section
              </Button>

              {currentSection === sections.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={getTotalAnsweredCount() < getTotalQuestions()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg"
                >
                  Get My Results
                </Button>
              ) : (
                <Button
                  onClick={nextSection}
                  disabled={!isCurrentSectionComplete()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Next Section
                </Button>
              )}
            </div>
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