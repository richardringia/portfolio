import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="flex h-full flex-col">
            <CardHeader>
              <Code2 className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>My Journey</CardTitle>
              <CardDescription>From Intern to Expert</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                My journey into frontend development began during his first
                internship, where he learned HTML, CSS, and JavaScript, sparking
                his passion for web development. As he progressed, he
                transitioned from vanilla JavaScript to React, appreciating its
                component-based architecture for building efficient, scalable
                user interfaces. Over the years, he has honed his skills through
                numerous projects, staying up-to-date with best practices and
                trends in the React ecosystem. Today, he is an expert frontend
                developer with a deep understanding of modern web technologies
                and a proven record of delivering high-quality applications.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col">
            <CardHeader>
              <Lightbulb className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Passion for Technology</CardTitle>
              <CardDescription>React and Beyond</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                I'm deeply passionate about React and React Native, technologies
                that have significantly shaped his career. He has gained
                extensive expertise in the React ecosystem, building everything
                from small components to large-scale applications. He excels in
                using React’s virtual DOM, JSX, hooks, and state management,
                optimizing performance for seamless user experiences. With React
                Native, he extends his skills to create cross-platform mobile
                applications for iOS and Android. Richard continually explores
                new features, best practices, and emerging patterns, pushing the
                boundaries of what’s possible in both web and mobile
                development.
              </p>
            </CardContent>
          </Card>
          <Card className="flex h-full flex-col">
            <CardHeader>
              <Rocket className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Career Aspirations</CardTitle>
              <CardDescription>
                Sharing Knowledge and Inspiring Others
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                My career aspirations focus on sharing his frontend development
                experiences and helping others learn. He aims to become a
                prolific technical writer, creating blog posts that simplify
                complex concepts and share best practices for developers at all
                levels. He also plans to contribute to open-source projects,
                enhancing the tools and libraries that support modern web
                development. Additionally, Richard aspires to become a mentor,
                sharing both technical knowledge and the soft skills he has
                gained throughout his career. By fostering the growth of others,
                he hopes to shape the future of frontend development and create
                a more inclusive and supportive tech community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
