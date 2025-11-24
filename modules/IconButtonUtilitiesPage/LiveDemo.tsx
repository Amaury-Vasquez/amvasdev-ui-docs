"use client";
import { getIconButtonClasses } from "amvasdev-ui";
import { Edit, Heart, Settings, Share, Star, Trash } from "lucide-react";

const LiveDemo = () => {
  const generatedClasses = getIconButtonClasses();

  return (
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
  );
};

export default LiveDemo;
