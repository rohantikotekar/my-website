import { FileText, ExternalLink, FlaskConical } from "lucide-react";
import { research } from "@/lib/data";
import { Section } from "@/components/section";
import { SectionReveal } from "@/components/trail/section-reveal";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Research() {
  return (
    <Section
      id="research"
      index="05"
      stage="Field Notes"
      title="Research & writing"
      intro="The questions I chase when the trail goes off the beaten path."
    >
      <SectionReveal className="mb-10 max-w-3xl">
        <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          {research.intro}
        </p>
      </SectionReveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {research.publications.map((pub, i) => (
          <SectionReveal key={pub.title} delay={(i % 2) * 0.08}>
            <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <FlaskConical className="size-4" />
                  </span>
                  <Badge variant="amber">{pub.year}</Badge>
                </div>
                <CardTitle className="mt-4 text-lg leading-snug transition-colors group-hover:text-forest">
                  {pub.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1.5">
                  <FileText className="size-3.5" />
                  {pub.venue}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-foreground/85">
                  {pub.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="forest">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <a
                    href={pub.link}
                    target={pub.link === "#" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    Read paper
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
