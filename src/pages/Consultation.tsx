import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Shield, Calendar, User, CreditCard, Smartphone, Building } from "lucide-react";

const Consultation = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
    upiId: "",
    netBankingBank: ""
  });

  useEffect(() => {
    const data = localStorage.getItem('contactData');
    if (data) {
      setContactData(JSON.parse(data));
    }
  }, []);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    alert("Payment successful! You will receive a confirmation email shortly.");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <span>E-Consult</span>
          <span>›</span>
          <span className="text-foreground">Dr. Anjali Verma</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Doctor Info */}
          <div className="space-y-8 animate-slide-up">
            <Card className="border-0 shadow-warm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-foreground">Dr. Anjali Verma</h1>
                  <p className="text-lg text-ayur-bronze-light">Ayurvedic Practitioner (BAMS, MD)</p>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-ayur-bronze" />
                      <span className="text-foreground">15+ years of experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-ayur-bronze" />
                      <span className="text-foreground">Specialized in Panchakosha therapy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-ayur-bronze" />
                      <span className="text-foreground">Certified Ayurvedic physician</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground">Consultation Fee</label>
                  <div className="mt-1 p-3 bg-muted rounded-md flex items-center justify-between">
                    <span className="text-foreground">₹ 1500.00</span>
                    <span className="text-xs text-muted-foreground">INR</span>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Choose Payment Method</label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="w-5 h-5 text-green-600" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI Payment</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Building className="w-5 h-5 text-purple-600" />
                      <Label htmlFor="netbanking" className="flex-1 cursor-pointer">Net Banking</Label>
                    </div>
                  </RadioGroup>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  {/* Card Payment Form */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">Card number</label>
                        <Input
                          placeholder="•••• •••• •••• ••••"
                          value={paymentForm.cardNumber}
                          onChange={(e) => setPaymentForm(prev => ({ ...prev, cardNumber: e.target.value }))}
                          className="mt-1"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground">Expiry date</label>
                          <Input
                            placeholder="MM / YY"
                            value={paymentForm.expiryDate}
                            onChange={(e) => setPaymentForm(prev => ({ ...prev, expiryDate: e.target.value }))}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">CVC</label>
                          <Input
                            placeholder="•••"
                            value={paymentForm.cvc}
                            onChange={(e) => setPaymentForm(prev => ({ ...prev, cvc: e.target.value }))}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground">Name on card</label>
                        <Input
                          placeholder="Your name as it appears on card"
                          value={paymentForm.nameOnCard}
                          onChange={(e) => setPaymentForm(prev => ({ ...prev, nameOnCard: e.target.value }))}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === "upi" && (
                    <div>
                      <label className="text-sm font-medium text-foreground">UPI ID</label>
                      <Input
                        placeholder="yourname@upi"
                        value={paymentForm.upiId}
                        onChange={(e) => setPaymentForm(prev => ({ ...prev, upiId: e.target.value }))}
                        className="mt-1"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Enter your UPI ID (Google Pay, PhonePe, Paytm, etc.)
                      </p>
                    </div>
                  )}

                  {/* Net Banking Form */}
                  {paymentMethod === "netbanking" && (
                    <div>
                      <label className="text-sm font-medium text-foreground">Select Bank</label>
                      <select
                        value={paymentForm.netBankingBank}
                        onChange={(e) => setPaymentForm(prev => ({ ...prev, netBankingBank: e.target.value }))}
                        className="mt-1 w-full p-3 border border-input bg-background rounded-md"
                        required
                      >
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                        <option value="bob">Bank of Baroda</option>
                        <option value="canara">Canara Bank</option>
                      </select>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold shadow-warm mt-6"
                  >
                    Pay ₹1500.00
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="animate-slide-up">
            <Card className="border-0 shadow-warm sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Consultation with</span>
                    <span className="text-foreground font-medium">Dr. Anjali Verma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date & Time</span>
                    <span className="text-foreground font-medium">15 Jan, 2024, 11:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground font-medium">45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground font-medium">Video Consultation</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">₹1500.00</span>
                  </div>
                </div>

                <Alert className="bg-green-50 border-green-200">
                  <Shield className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Your payment is secure. We use industry-standard encryption to protect your information.
                  </AlertDescription>
                </Alert>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    By proceeding with payment, you agree to our{" "}
                    <span className="text-ayur-bronze cursor-pointer hover:underline">Terms of Service</span>{" "}
                    and{" "}
                    <span className="text-ayur-bronze cursor-pointer hover:underline">Privacy Policy</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;