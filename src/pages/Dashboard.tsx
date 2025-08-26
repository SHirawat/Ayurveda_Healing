import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  User, 
  Download,
  Clock,
  CreditCard
} from "lucide-react";

const Dashboard = () => {
  const sidebarItems = [
    { name: "Dashboard", icon: TrendingUp, active: true },
    { name: "Leads", icon: User, count: 12 },
    { name: "Appointments", icon: Calendar, count: 5 },
    { name: "Messages", icon: MessageSquare, count: 8 },
    { name: "Marketing", icon: TrendingUp },
  ];

  const leadActions = [
    { name: "Schedule Consultation", icon: Calendar },
    { name: "Send Message", icon: MessageSquare, count: 5 },
    { name: "Propose Treatment Plan", icon: FileText },
    { name: "Request Payment", icon: CreditCard },
  ];

  const symptoms = [
    { name: "Bloating", active: true },
    { name: "Gas", active: true },
    { name: "Irregular Bowel...", active: true },
    { name: "Fatigue", active: false },
    { name: "Anxiety", active: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-bronze rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M50 20 C35 30, 35 50, 50 60 C65 50, 65 30, 50 20 Z" />
                <circle cx="50" cy="50" r="3" />
                <path d="M50 80 C35 70, 35 50, 50 40 C65 50, 65 70, 50 80 Z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">Ayurveda Health</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={item.name}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  item.active 
                    ? "bg-gradient-bronze text-white" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1">{item.name}</span>
                {item.count && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Dashboard</h1>
            <p className="text-muted-foreground">Manage leads and patient interactions.</p>
          </div>

          <div className="flex gap-8">
            {/* Patient Profile Section */}
            <div className="flex-1">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Ananya Sharma</h3>
                      <p className="text-sm text-muted-foreground">Lead ID: 987654</p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Became a lead 3 days ago
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Tabs defaultValue="intake" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="intake">Intake Form</TabsTrigger>
                      <TabsTrigger value="chat">Chat</TabsTrigger>
                    </TabsList>

                    <TabsContent value="intake" className="mt-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-semibold">Ayurvedic Intake Form</h4>
                        <Button variant="outline" className="bg-gradient-bronze hover:opacity-90 text-white border-0">
                          <Download className="w-4 h-4 mr-2" />
                          Download Form
                        </Button>
                      </div>

                      <div className="space-y-6">
                        {/* General Information */}
                        <div>
                          <h5 className="font-medium mb-4">General Information</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Age:</span>
                              <span className="ml-2">32</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Gender:</span>
                              <span className="ml-2">Female</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Primary Concern:</span>
                              <span className="ml-2">Digestive Issues</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Ayurvedic Constitution (Dosha):</span>
                              <span className="ml-2">Vata-Pitta</span>
                            </div>
                            <div className="col-span-2">
                              <span className="text-muted-foreground">Lifestyle:</span>
                              <span className="ml-2">Sedentary</span>
                            </div>
                          </div>
                        </div>

                        {/* Reported Symptoms */}
                        <div>
                          <h5 className="font-medium mb-4">Reported Symptoms</h5>
                          <div className="flex flex-wrap gap-2">
                            {symptoms.map((symptom, index) => (
                              <Badge
                                key={index}
                                variant={symptom.active ? "default" : "secondary"}
                                className={symptom.active ? "bg-gradient-bronze hover:opacity-90" : ""}
                              >
                                {symptom.name}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Dietary Habits */}
                        <div>
                          <h5 className="font-medium mb-4">Dietary Habits</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Typical Diet:</span>
                              <span className="ml-2">Mostly vegetarian, some dairy</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Food Sensitivities:</span>
                              <span className="ml-2">Gluten, Soy</span>
                            </div>
                            <div className="col-span-2">
                              <span className="text-muted-foreground">Hydration:</span>
                              <span className="ml-2">Drinks 2-3 liters of water daily</span>
                            </div>
                          </div>
                        </div>

                        {/* Lifestyle */}
                        <div>
                          <h5 className="font-medium mb-4">Lifestyle</h5>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Exercise:</span>
                              <span className="ml-2">Walks 30 minutes, 3 times a week</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Sleep:</span>
                              <span className="ml-2">7-8 hours, but often interrupted</span>
                            </div>
                            <div className="col-span-2">
                              <span className="text-muted-foreground">Stress Levels:</span>
                              <span className="ml-2">High stress due to work</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="overview">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Patient overview information will be displayed here.</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="chat">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Chat interface will be displayed here.</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Lead Actions Sidebar */}
            <div className="w-80">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leadActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <action.icon className="w-4 h-4 mr-2" />
                        {action.name}
                        {action.count && (
                          <Badge variant="secondary" className="ml-auto">
                            {action.count}
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;