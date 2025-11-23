"use client";
import { getIconButtonClasses } from "amvasdev-ui";
import { Settings, Edit, Trash, Heart, Share, Star } from "lucide-react";
import { UTILITIES_DATA } from "@/data/utilities";

const utilityData = UTILITIES_DATA["icon-button"];

export default function IconButtonUtilitiesPage() {
  const generatedClasses = getIconButtonClasses();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{utilityData.name}</h1>
        <p className="text-lg text-base-content/80">{utilityData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{utilityData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Functions</h2>
        <div className="space-y-6">
          {utilityData.functions.map((func) => (
            <div key={func.name} className="p-6 bg-base-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 font-mono">
                {func.name}
              </h3>
              <p className="text-base-content/70 mb-3">{func.description}</p>
              <div className="mockup-code mb-3">
                <pre>
                  <code>{func.signature}</code>
                </pre>
              </div>
              <p className="text-sm">
                <span className="font-semibold">Returns:</span> {func.returns}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="p-6 bg-base-200 rounded-lg space-y-6">
          <div>
            <p className="font-semibold mb-3">Basic Icon Buttons:</p>
            <div className="flex gap-2 flex-wrap">
              <button className={generatedClasses}>
                <Settings size={20} />
              </button>
              <button className={generatedClasses}>
                <Edit size={20} />
              </button>
              <button className={generatedClasses}>
                <Trash size={20} />
              </button>
              <button className={generatedClasses}>
                <Heart size={20} />
              </button>
              <button className={generatedClasses}>
                <Share size={20} />
              </button>
              <button className={generatedClasses}>
                <Star size={20} />
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">With Custom Colors:</p>
            <div className="flex gap-2 flex-wrap">
              <button className={`${generatedClasses} text-primary`}>
                <Settings size={20} />
              </button>
              <button className={`${generatedClasses} text-secondary`}>
                <Edit size={20} />
              </button>
              <button className={`${generatedClasses} text-error`}>
                <Trash size={20} />
              </button>
              <button className={`${generatedClasses} text-success`}>
                <Heart size={20} />
              </button>
              <button className={`${generatedClasses} text-warning`}>
                <Share size={20} />
              </button>
              <button className={`${generatedClasses} text-info`}>
                <Star size={20} />
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Generated Classes:</p>
            <div className="mockup-code">
              <pre>
                <code>{generatedClasses}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">
          {utilityData.examples.map((example, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              {example.description ? (
                <p className="text-base-content/70 mb-3">{example.description}</p>
              ) : null}
              <div className="mockup-code">
                <pre>
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(utilityData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {utilityData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
