import { useState } from "react";
import { skills, categories } from "../utils/constants";
import { cn } from "../lib/utils";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]); //default = 'all'

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* categories tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                    style={{ width: skill.level + "%" }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
