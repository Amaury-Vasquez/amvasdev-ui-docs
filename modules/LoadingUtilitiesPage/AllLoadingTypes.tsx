"use client";
import { getLoadingClasses } from "amvasdev-ui";

const TYPES = ["spin", "dots", "ring", "ball", "bars", "infinity"] as const;

const AllLoadingTypes = () => (
  <div className="p-6 bg-base-200 rounded-lg">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {TYPES.map((type) => (
        <div key={type} className="text-center">
          <div className="flex items-center justify-center p-6 bg-base-300 rounded mb-2">
            <span
              className={`loading ${getLoadingClasses({
                type,
                size: "lg",
              })}`}
            />
          </div>
          <p className="font-mono text-sm">{type}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AllLoadingTypes;
