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
          <button
            className={generatedClasses}
            id="icon-button-settings"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>
          <button
            className={generatedClasses}
            id="icon-button-edit"
            aria-label="Edit"
          >
            <Edit size={20} />
          </button>
          <button
            className={generatedClasses}
            id="icon-button-trash"
            aria-label="Delete"
          >
            <Trash size={20} />
          </button>
          <button
            className={generatedClasses}
            id="icon-button-heart"
            aria-label="Like"
          >
            <Heart size={20} />
          </button>
          <button
            className={generatedClasses}
            id="icon-button-share"
            aria-label="Share"
          >
            <Share size={20} />
          </button>
          <button
            className={generatedClasses}
            id="icon-button-star"
            aria-label="Favorite"
          >
            <Star size={20} />
          </button>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-3">With Custom Colors:</p>
        <div className="flex gap-2 flex-wrap">
          <button
            className={`${generatedClasses} text-primary`}
            id="icon-button-settings-primary"
            aria-label="Settings with primary color"
          >
            <Settings size={20} />
          </button>
          <button
            className={`${generatedClasses} text-secondary`}
            id="icon-button-edit-secondary"
            aria-label="Edit with secondary color"
          >
            <Edit size={20} />
          </button>
          <button
            className={`${generatedClasses} text-error`}
            id="icon-button-trash-error"
            aria-label="Delete with error color"
          >
            <Trash size={20} />
          </button>
          <button
            className={`${generatedClasses} text-success`}
            id="icon-button-heart-success"
            aria-label="Like with success color"
          >
            <Heart size={20} />
          </button>
          <button
            className={`${generatedClasses} text-warning`}
            id="icon-button-share-warning"
            aria-label="Share with warning color"
          >
            <Share size={20} />
          </button>
          <button
            className={`${generatedClasses} text-info`}
            id="icon-button-star-info"
            aria-label="Favorite with info color"
          >
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
