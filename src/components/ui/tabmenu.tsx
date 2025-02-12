import { useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState("bagelsandtoasties");

  // Add these helper functions
  const getTitle = (key: string) => {
    const titles: { [key: string]: string } = {
      bagelsandtoasties: "Bagels & Toasties",
      healthbowls: "Health Bowls",
      plates: "Plates",
      sweetandsavoury: "Sweet & Savoury",
      coffee: "Coffee",
      tea: "Tea",
      juiceandsmoothie: "Juice & Smoothie",
      hotchocolate: "Hot Chocolate (Callebaut)",
    };
    return titles[key];
  };

  const getDescription = (key: string) => {
    const descriptions: { [key: string]: string } = {
      bagelsandtoasties: "Fresh and delicious sandwiches",
      healthbowls: "Nutritious and delicious bowls",
      plates: "Hearty main dishes",
      sweetandsavoury: "Sweet treats and savory delights",
      coffee: "BioDynamic Coffee - Pure, Healthy, Holistic",
      tea: "Teapigs - all natural, no nasties, big leaf = big flavour",
      juiceandsmoothie: "Fresh and healthy drinks",
      hotchocolate: "Premium Belgian coverture chocolate",
    };
    return descriptions[key];
  };

  const menuItems = {
    bagelsandtoasties: [
      {
        name: "Falafel & Avocado Wrap (VGN)",
        description: "Falafel, Avocado, Hummus, Spinach, Gherkin, Tomato",
        price: "£6.00",
        dietary: "Vegan",
      },
      {
        name: "Ham & Cheese Toastie",
        description:
          "Cured Ham, Cheddar, Pickles, Mustard Mayo (Add Chorizo +£1.00)",
        price: "£7.50",
        dietary: "Dairy",
      },
      {
        name: "Tuna Melt Toastie",
        description:
          "Tuna Steak, Mustard Mayo, Dried Onion, Herbs, seasoning & Cheddar",
        price: "£7.50",
      },
      {
        name: "Egg Avo Toastie/Bagel",
        description: "Avocado, Buttered Egg, Feta, Rocket",
        price: "£8.00",
        dietary: "Vegetarian, Dairy",
      },
      {
        name: "Full English Bagel",
        description: "Egg, Sausage, Streaky Bacons, Mustard Mayo",
        price: "£8.00",
      },
      {
        name: "Beef Pastrami Bagel",
        description:
          "Pastrami, Lettuce, Sundried Tomato, Gherkin, Cheddar, Mustard Mayo",
        price: "£8.00",
        dietary: "Dairy",
      },
      {
        name: "Chicken Avocado Bagel",
        description: "Chicken, Avocado, Special Mayo, Lettuce, Tomato, Olive",
        price: "£8.00",
        dietary: "Dairy",
      },
      {
        name: "Green Club",
        description:
          "Avocado, Spinach, Cream Cheese/Hummus, Walnut, Rocket & Olive oil",
        price: "£8.00",
        dietary: "Vegan & Vegetarian",
      },
      {
        name: "Salmon & Cream Cheese",
        description: "Smoked Salmon, Cream Cheese, cucumber",
        price: "£8.50",
        dietary: "Dairy",
      },
    ],
    healthbowls: [
      {
        name: "Porridge",
        description: "Oats, Milk/Oat Milk, Almond, Honey",
        price: "£6.00",
      },
      {
        name: "Super Berries (V)/(VGN)",
        description:
          "Yogurt/Milk, Granola, Banana, Blueberry, Strawberry, Goji Berry, Honey, Super seeds (Flaxseed, Pumpkin, Sunflower, Chia)",
        price: "£9.00",
      },
      {
        name: "Acai Bowl (VGN)",
        description: "Acai, Banana, Blueberry, Strawberry, Granola & Almonds",
        price: "£9.50",
      },
      {
        name: "Munchy Salad (V)",
        description:
          "Avocado, Olives, Cherry Tomato, Cucumber, Feta, Lemon, Olive Oil, Seeds, Hummus & slice of sourdough",
        price: "£9.00",
      },
      {
        name: "Diet Salad (VGN)",
        description:
          "Spinach, Rocket, Avocado, Carrot, Beetroot, Olive, Cucumber, Tomato, Seeds & Special vinegar side dressing",
        price: "£9.00",
      },
      {
        name: "Chikavo Pasta Salad",
        description:
          "Pasta, Lettuce, Chicken, Avocado, Olives, Cucumber, Tomato & seeds",
        price: "£11.00",
      },
      {
        name: "Spring & Summer Cold Soup (V)/(VGN)",
        description:
          "Avocado, Spinach, Cucumber & Yogurt/Oat Milk, Seeds & Raisins",
        price: "£7.00",
      },
      {
        name: "Lentil Soup (Seasonal)",
        description:
          "Lentil, Tomato, Onion, Carrot, Mushroom, Herbs & Onion Flakes",
        price: "£7.00",
      },
    ],
    plates: [
      {
        name: "English Breakfast",
        description:
          "Sausages, Streaky Bacons, Hash Browns, Mushroom, Tomato, Bean, Eggs (VGN: Vegan Sausages, Avocado, Hummus)",
        price: "£12.50",
      },
      {
        name: "Sausage Shakshuka",
        description:
          "Beef Sausage, Mushroom, Onion, Bell Pepper, Eggs, Feta, Tomato Sauce",
        price: "£12.00",
      },
      {
        name: "Turkish Egg",
        description:
          "Greek Yogurt, Garlic Spinach & herbs, Spicy Turkish Beef Sausage, Poached Eggs, Chili Butter",
        price: "£12.00",
      },
      {
        name: "Persian Breakfast (V)",
        description:
          "Egg, Feta, Butter, Honey, Jam, Walnut, Tomato, Cucumber + Pot of Tea",
        price: "£11.50",
      },
      {
        name: "Salmon Plate",
        description:
          "Smoked Salmon, Avocado, Scrambled Eggs, Served with slice of sourdough",
        price: "£11.00",
      },
    ],
    coffee: [
      {
        name: "Espresso",
        description: "Double Shot Espresso",
        price: "£3.00",
      },
      {
        name: "Macchiato",
        description: '"Stained Double Espresso Coffee"',
        price: "£3.20",
      },
      {
        name: "Cortado",
        description: "Espresso mixed with a roughly equal amount of warm milk",
        price: "£3.20",
      },
      {
        name: "Americano",
        description: "Double Espresso with Hot water",
        price: "£3.00",
      },
      {
        name: "Latte",
        description: "Espresso & Steamed Milk",
        price: "£3.60",
      },
      {
        name: "Flat White",
        description: "Higher Proportion of Espresso to Milk",
        price: "£3.40",
      },
    ],
    tea: [
      {
        name: "English Breakfast Tea",
        description:
          'A top quality version of the "regular tea", drink with milk morning, noon and night',
        price: "£2.70",
      },
      {
        name: "Peppermint Tea",
        description:
          "The mintiest mint of all time, this is a stand out peppermint",
        price: "£3.00",
      },
      {
        name: "Persian Tea Mix",
        description:
          "A relaxing, magical, soothing herbal tea remedy with Persian black tea leaf, Saffron, Cardamon, Cinnamon, Rose",
        price: "£4.50",
      },
    ],
    juiceandsmoothie: [
      {
        name: "Classic",
        description: "Carrot, Apple, Orange, Ginger",
        price: "£4.99",
      },
      {
        name: "Green Machine",
        description: "Apple, Celery, Cucumber, Spinach, Lemon",
        price: "£5.50",
      },
      {
        name: "Watermelon Juice (Season's Special)",
        description: "Pure Watermelon Juice",
        price: "£4.99",
      },
      {
        name: "Berry Tasty",
        description: "Blueberries, Raspberries, Cherry",
        price: "£6.50",
      },
      {
        name: "Green Diet",
        description: "Avocado, Spinach, Yogurt, Oat Milk, Agave Syrup",
        price: "£6.50",
      },
    ],
    hotchocolate: [
      {
        name: "33% Light & Rich",
        description: "A Light & Rich Hot Chocolate",
        price: "Small £4.50 - Large £5.99",
      },
      {
        name: "54% Medium & Rich",
        description: "A Medium & Rich Hot Chocolate",
        price: "Small £4.50 - Large £5.99",
      },
      {
        name: "70% Strong & Rich",
        description: "A Strong & Rich Hot Chocolate",
        price: "Small £4.50 - Large £5.99",
      },
    ],
    sweetandsavoury: [
      {
        name: "Pancake & Berries",
        description:
          "Fluffy Pancake, Blueberry, Strawberry, Banana, Cream, Honey/Chocolate",
        price: "£9.50",
        note: "(Gluten Free +£1)",
      },
      {
        name: "Savory Pancake",
        description:
          "Avocado, Poached egg, Bacon, Cherry Tomato, Cream Cheese, Onion Flake",
        price: "£11.00",
        note: "(Gluten Free +£1)",
      },
      {
        name: "Good Morning",
        description:
          "Filled Croissant with Cream cheese, Egg, Sundried Tomato & Rocket",
        price: "£5.50",
      },
      {
        name: "Creamy Mushroom (V)",
        description:
          "Filled Croissant with Mushrooms, Cream, Melted Cheddar & seasoning",
        price: "£6.50",
        dietary: "Vegetarian",
      },
    ],
  };

  // Add this helper function to render menu items
  const MenuItemsList = ({ items }: { items: any[] }) => (
    <div className="grid gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-emerald-100 pb-4 last:border-0"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-emerald-900">
              {item.name}
            </h3>
            <span className="font-medium text-emerald-700">{item.price}</span>
          </div>
          <p className="text-emerald-700">{item.description}</p>
          {item.dietary && (
            <span className="text-sm text-emerald-600 mt-1 block">
              {item.dietary}
            </span>
          )}
          {item.note && (
            <span className="text-sm text-emerald-500 mt-1 block italic">
              {item.note}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <Tabs
      value={selectedTab}
      onValueChange={setSelectedTab}
      className="w-full max-w-6xl mx-auto px-4"
    >
      {/* Tabs for larger screens */}
      <div className="hidden lg:block">
        <TabsList className="grid w-full grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 bg-emerald-50 p-2 rounded-lg">
          {[
            { value: "bagelsandtoasties", label: "Bagels & Toasties" },
            { value: "healthbowls", label: "Health Bowls" },
            { value: "plates", label: "Plates" },
            { value: "sweetandsavoury", label: "Sweet & Savoury" },
            { value: "coffee", label: "Coffee" },
            { value: "tea", label: "Tea" },
            { value: "juiceandsmoothie", label: "Juice & Smoothie" },
            { value: "hotchocolate", label: "Hot Chocolate" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="whitespace-nowrap data-[state=active]:bg-emerald-600 data-[state=active]:text-white hover:bg-emerald-100"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Dropdown for smaller screens */}
      <div className="block lg:hidden w-full">
        <select
          className="w-full border border-emerald-200 rounded-md p-2 text-emerald-800 focus:border-emerald-500 focus:ring-emerald-500"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          <option value="bagelsandtoasties">Bagels & Toasties</option>
          <option value="healthbowls">Health Bowls</option>
          <option value="plates">Plates</option>
          <option value="sweetandsavoury">Sweet & Savoury</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="juiceandsmoothie">Juice & Smoothie</option>
          <option value="hotchocolate">Hot Chocolate (Callebut)</option>
        </select>
      </div>

      {Object.entries(menuItems).map(([key, items]) => (
        <TabsContent key={key} value={key}>
          <Card className="border-emerald-100">
            <CardHeader>
              <CardTitle className="text-emerald-800">
                {getTitle(key)}
              </CardTitle>
              <CardDescription className="text-emerald-600">
                {getDescription(key)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MenuItemsList items={items} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
