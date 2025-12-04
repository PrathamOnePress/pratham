/**
 * PageHeader Component
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

type Props = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="border-b border-pr_silver/20 bg-gradient-to-b from-pr_dark via-pr_dark to-black/60">
      <div className="container-main py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-pr_silver">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
