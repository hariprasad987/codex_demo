export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cuisine: string;
  cookTimeMins: number;
  difficulty: "Easy" | "Medium" | "Hard";
}
