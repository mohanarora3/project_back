import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Building2,
  Users,
  Eye,
  EyeOff,
  Mail,
  Lock,
  UserPlus,
} from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("company");

  const [companyLogin, setCompanyLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [customerSignup, setCustomerSignup] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleCompanyLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company login:", companyLogin);
    onOpenChange(false);
  };

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customer login:", customerLogin);
    onOpenChange(false);
  };

  const handleCustomerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customer signup:", customerSignup);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Building2 className="h-4 w-4" />
            </div>
            BizFolio Access
          </DialogTitle>
          <DialogDescription>
            Choose your portal and sign in to continue
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Company
            </TabsTrigger>
            <TabsTrigger value="customer" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Customer
            </TabsTrigger>
          </TabsList>

          {/* Company Login */}
          <TabsContent value="company" className="space-y-4">
            <form onSubmit={handleCompanyLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company-email"
                    type="email"
                    placeholder="admin@company.co.in"
                    value={companyLogin.email}
                    onChange={(e) =>
                      setCompanyLogin({
                        ...companyLogin,
                        email: e.target.value,
                      })
                    }
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={companyLogin.password}
                    onChange={(e) =>
                      setCompanyLogin({
                        ...companyLogin,
                        password: e.target.value,
                      })
                    }
                    className="pl-9 pr-9"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="company-remember"
                  checked={companyLogin.rememberMe}
                  onCheckedChange={(checked) =>
                    setCompanyLogin({
                      ...companyLogin,
                      rememberMe: checked as boolean,
                    })
                  }
                />
                <Label htmlFor="company-remember" className="text-sm">
                  Remember me
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Sign in to Dashboard
              </Button>
            </form>
          </TabsContent>

          {/* Customer Portal */}
          <TabsContent value="customer" className="space-y-4">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Customer Login */}
              <TabsContent value="login">
                <form onSubmit={handleCustomerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="customer-email"
                        type="email"
                        placeholder="customer@email.in"
                        value={customerLogin.email}
                        onChange={(e) =>
                          setCustomerLogin({
                            ...customerLogin,
                            email: e.target.value,
                          })
                        }
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="customer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={customerLogin.password}
                        onChange={(e) =>
                          setCustomerLogin({
                            ...customerLogin,
                            password: e.target.value,
                          })
                        }
                        className="pl-9 pr-9"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="customer-remember"
                      checked={customerLogin.rememberMe}
                      onCheckedChange={(checked) =>
                        setCustomerLogin({
                          ...customerLogin,
                          rememberMe: checked as boolean,
                        })
                      }
                    />
                    <Label htmlFor="customer-remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Sign in
                  </Button>
                </form>
              </TabsContent>

              {/* Customer Signup */}
              <TabsContent value="signup">
                <form onSubmit={handleCustomerSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        placeholder="Raj"
                        value={customerSignup.firstName}
                        onChange={(e) =>
                          setCustomerSignup({
                            ...customerSignup,
                            firstName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        placeholder="Singh"
                        value={customerSignup.lastName}
                        onChange={(e) =>
                          setCustomerSignup({
                            ...customerSignup,
                            lastName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-company">Company</Label>
                    <Input
                      id="signup-company"
                      placeholder="Your Company Name"
                      value={customerSignup.company}
                      onChange={(e) =>
                        setCustomerSignup({
                          ...customerSignup,
                          company: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="raj@company.co.in"
                        value={customerSignup.email}
                        onChange={(e) =>
                          setCustomerSignup({
                            ...customerSignup,
                            email: e.target.value,
                          })
                        }
                        className="pl-9"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={customerSignup.password}
                        onChange={(e) =>
                          setCustomerSignup({
                            ...customerSignup,
                            password: e.target.value,
                          })
                        }
                        className="pl-9 pr-9"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                        onClick={() =>
                          setShowSignupPassword(!showSignupPassword)
                        }
                      >
                        {showSignupPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={customerSignup.confirmPassword}
                      onChange={(e) =>
                        setCustomerSignup({
                          ...customerSignup,
                          confirmPassword: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="signup-terms"
                      checked={customerSignup.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setCustomerSignup({
                          ...customerSignup,
                          agreeToTerms: checked as boolean,
                        })
                      }
                      required
                    />
                    <Label htmlFor="signup-terms" className="text-sm">
                      I agree to the terms and privacy policy
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
