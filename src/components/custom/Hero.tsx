import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Richard Ringia
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl">
              Full stack web developer
            </p>
          </div>
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="John Doe"
            width={300}
            height={300}
            className="aspect-square rounded-full border-2 border-zinc-200 object-cover dark:border-zinc-700"
          />
          <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button size="lg" className="mt-4">
            View My Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
