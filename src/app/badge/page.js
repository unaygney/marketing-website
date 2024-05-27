import React from "react";
import Input from "@/components/input";

const inputValue = {
  name: "email",
  placeholder: "Testing",
  hint: "This is a hint text",
  label: "Test",
  type: "text",
  id: "email",
};

export default function page() {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div>
        {/* <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  colors="neutral"
                  size={
                    index === 0
                      ? "small"
                      : index === 1
                      ? "medium"
                      : index === 2
                      ? "large"
                      : ""
                  }
                />
              ))}
          </div>
          <div className="flex items-center gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  colors="error"
                  size={
                    index === 0
                      ? "small"
                      : index === 1
                      ? "medium"
                      : index === 2
                      ? "large"
                      : ""
                  }
                />
              ))}
          </div>
          <div className="flex items-center gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  colors="warning"
                  size={
                    index === 0
                      ? "small"
                      : index === 1
                      ? "medium"
                      : index === 2
                      ? "large"
                      : ""
                  }
                />
              ))}
          </div>
          <div className="flex items-center gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  colors="success"
                  size={
                    index === 0
                      ? "small"
                      : index === 1
                      ? "medium"
                      : index === 2
                      ? "large"
                      : ""
                  }
                />
              ))}
          </div>
          <div className="flex items-center gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Badge
                  key={index}
                  colors="brand"
                  size={
                    index === 0
                      ? "small"
                      : index === 1
                      ? "medium"
                      : index === 2
                      ? "large"
                      : ""
                  }
                />
              ))}
          </div>
        </div> */}

        <Input {...inputValue} />
      </div>
    </main>
  );
}
