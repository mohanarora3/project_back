import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Save, Cog } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Configure your BizFolio account and business preferences.
            </p>
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Coming Soon Card */}
        <Card className="h-96">
          <CardContent className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
              <SettingsIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Account Settings</h3>
              <p className="text-muted-foreground max-w-md">
                Coming soon! Comprehensive settings panel for account
                management, business configuration, notification preferences,
                and system customization.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cog className="h-4 w-4" />
              <span>Feature in development</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
