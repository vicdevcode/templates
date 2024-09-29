import { generateRandomRussianWords } from "@/shared/lib/random-words";
import { Badge } from "@/shared/ui/badge";
import { FC } from "react";

export const BadgeListWidget: FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-3">
          <Badge withDot color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-4">
          <Badge withDot size="sm" color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-3">
          <Badge variant="secondary" withDot color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-4">
          <Badge variant="secondary" withDot size="sm" color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
      </div>
      <div className="dark bg-bg-page p-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <Badge withDot color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-4">
          <Badge withDot size="sm" color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge withDot size="sm" color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-3">
          <Badge variant="secondary" withDot color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
        <div className="flex gap-4">
          <Badge variant="secondary" withDot size="sm" color="info">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="warning">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="error">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="success">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="neutral">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-01">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-02">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-03">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-04">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-05">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
          <Badge variant="secondary" withDot size="sm" color="status-06">
            {generateRandomRussianWords({
              min: 1,
              max: 2,
              capitalize: "all",
              allowRepeat: false,
            })}
          </Badge>
        </div>
      </div>
    </div>
  );
};
