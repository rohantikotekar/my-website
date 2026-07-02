import { FileText, ExternalLink } from "lucide-react";
import { research, sectionContent } from "@/lib/data";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
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
  const c = sectionContent.research;
  return (
    <Section
      id="research"
      kicker={c.kicker}
      title={c.title}
      intro={research.intro}
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {research.publications.map((pub, i) => (
          <Reveal key={pub.title} delay={(i % 2) * 0.08}>
            <Card className="group flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-card-strong">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="kicker">{c.publicationLabel}</span>
                  <Badge variant="accent">{pub.year}</Badge>
                </div>
                <CardTitle className="mt-3 text-lg leading-snug transition-colors group-hover:text-accent">
                  {pub.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1.5">
                  <FileText className="size-3.5 shrink-0" />
                  {pub.venue}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm leading-relaxed text-soft">
                  {pub.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    {c.readPaperLabel}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
