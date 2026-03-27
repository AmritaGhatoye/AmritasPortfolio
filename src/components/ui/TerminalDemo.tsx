"use client";
import { Terminal } from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <section className="w-full py-10 md:py-20">
      <Terminal
        username="Amrita-macbook"
        commands={[
          "git clone https://github.com/example/e-commerce.git",
          "cd e-commerce",
          "npm install",
          "npx playwright test",
        ]}
        outputs={{
          0: [
            "Cloning into 'e-commerce'...",
            "Done.",
          ],
          1: [],
          2: ["added 1024 packages in 30s"],
          3: [
            "Running 5 tests using 1 worker",
            "  [1/5] › login.spec.ts:10:1 › Login functionality › should allow user to login",
            "  [2/5] › search.spec.ts:8:1 › Search functionality › should return results for valid search",
            "  [3/5] › cart.spec.ts:12:1 › Shopping cart › should add item to cart",
            "  [4/5] › checkout.spec.ts:25:1 › Checkout process › should complete purchase successfully",
            "  [5/5] › logout.spec.ts:6:1 › Logout functionality › should log user out",
            "",
            "  5 passed (1m 15s)",
          ],
        }}
        typingSpeed={45}
        delayBetweenCommands={1000}
      />
    </section>
  );
}
