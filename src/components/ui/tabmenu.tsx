import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="bagelsandtoasties" className="w-full">
      <TabsList className="grid w-full grid-cols-8">
        <TabsTrigger value="bagelsandtoasties">Bagels & Toasties</TabsTrigger>
        <TabsTrigger value="healthbowls">Health Bowls</TabsTrigger>
        <TabsTrigger value="plates">Plates</TabsTrigger>
        <TabsTrigger value="sweetandsavoury">Sweet & Savoury</TabsTrigger>
        <TabsTrigger value="coffee">Coffee</TabsTrigger>
        <TabsTrigger value="tea">Tea</TabsTrigger>
        <TabsTrigger value="juiceandsmoothie">Juice & Smoothie</TabsTrigger>
        <TabsTrigger value="hotchocolate">Hot Chocolate (Callebut)</TabsTrigger>
      </TabsList>

      <TabsContent value="bagelsandtoasties">
        <Card>
          <CardHeader>
            <CardTitle>Bagels and Toasties</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="healthbowls">
        <Card>
          <CardHeader>
            <CardTitle>Health Bowls</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="plates">
        <Card>
          <CardHeader>
            <CardTitle>Plates</CardTitle>
            <CardDescription>Plates here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Plates</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="sweetandsavoury">
        <Card>
          <CardHeader>
            <CardTitle>Sweet & Savoury</CardTitle>
            <CardDescription>Sweet & Savoury here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Sweet & Savoury</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="coffee">
        <Card>
          <CardHeader>
            <CardTitle>Coffee</CardTitle>
            <CardDescription>Coffee here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Coffee</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="tea">
        <Card>
          <CardHeader>
            <CardTitle>Tea</CardTitle>
            <CardDescription>Tea here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Tea</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="juiceandsmoothie">
        <Card>
          <CardHeader>
            <CardTitle>Juice and Smoothies</CardTitle>
            <CardDescription>Juice and Smoothies here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Juice and Smoothies</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="hotchocolate">
        <Card>
          <CardHeader>
            <CardTitle>Hot Chocolate (Callebut)</CardTitle>
            <CardDescription>Hot Chocolate (Callebut) here</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button>Insert Hot Chocolate (Callebut)</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
