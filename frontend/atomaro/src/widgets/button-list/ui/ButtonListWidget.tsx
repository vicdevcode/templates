import { SolarAltArrowDownIcon } from "@/shared/icons";
import { Button, FunctionButton, IconButton } from "@/shared/ui/button";
import { CloseButton } from "@/shared/ui/button/close-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Heart } from "@atomaro/icons";
import { FC } from "react";

export const ButtonListWidget: FC = () => {
  return (
    <div>
      <div className="bg-bg-page">
        <div className="flex gap-2 p-2">
          <div className="flex flex-col gap-2 items-start">
            <Button size="xl">Button label</Button>
            <Button size="lg">Button label</Button>
            <Button size="md">Button label</Button>
            <Button size="sm">Button label</Button>
            <CloseButton />
            <CloseButton size="md" />
            <CloseButton size="sm" />
            <CloseButton size="xs" />
            <CloseButton size="2xs" />
            <FunctionButton>Label</FunctionButton>
            <FunctionButton variant="secondary">
              Label <Heart />
            </FunctionButton>
            <FunctionButton variant="tertiary">
              Label <Heart />
            </FunctionButton>
            <FunctionButton variant="tertiary">
              <Heart />
            </FunctionButton>
            <IconButton size="md" variant="outline">
              <SolarAltArrowDownIcon />
            </IconButton>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="secondary" size="xl">
              Button label
            </Button>
            <Button variant="secondary" size="lg">
              Button label
            </Button>
            <Button variant="secondary" size="md">
              Button label
            </Button>
            <Button variant="secondary" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="outline" size="xl">
              Button label
            </Button>
            <Button variant="outline" size="lg">
              Button label
            </Button>
            <Button variant="outline" size="md">
              Button label
            </Button>
            <Button variant="outline" size="sm">
              Button label
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
              <DropdownMenuContent className="w-[280px]">
                <DropdownMenuItem>Photoshop</DropdownMenuItem>
                <DropdownMenuItem>Figma</DropdownMenuItem>
                <DropdownMenuItem>Adobe XD</DropdownMenuItem>
                <DropdownMenuItem>Framer</DropdownMenuItem>
                <DropdownMenuItem>Sketch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Open</Button>
              </PopoverTrigger>
              <PopoverContent>
                Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello Hello
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="ghost" size="xl">
              Button label
            </Button>
            <Button variant="ghost" size="lg">
              Button label
            </Button>
            <Button variant="ghost" size="md">
              Button label
            </Button>
            <Button variant="ghost" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button disabled variant="primary" size="xl">
              Button label
            </Button>
            <Button disabled variant="secondary" size="lg">
              Button label
            </Button>
            <Button disabled variant="outline" size="md">
              Button label
            </Button>
            <Button disabled variant="ghost" size="sm">
              Button label
            </Button>
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" size="xl">
              Button label
            </Button>
            <Button color="neutral" size="lg">
              Button label
            </Button>
            <Button color="neutral" size="md">
              Button label
            </Button>
            <Button color="neutral" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="secondary" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="outline" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="ghost" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button disabled variant="primary" size="xl">
              Button label
            </Button>
            <Button disabled variant="secondary" size="lg">
              Button label
            </Button>
            <Button disabled variant="outline" size="md">
              Button label
            </Button>
            <Button disabled variant="ghost" size="sm">
              Button label
            </Button>
          </div>
        </div>
      </div>
      <div className="dark bg-bg-page">
        <div className="flex gap-2 p-2">
          <div className="flex flex-col gap-2 items-start">
            <Button size="xl">Зарегистрироваться</Button>
            <Button size="lg">Отправить</Button>
            <Button color="error" size="md">
              Удалить
            </Button>
            <Button size="sm">Изменить</Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="secondary" size="xl">
              Button label
            </Button>
            <Button variant="secondary" size="lg">
              Button label
            </Button>
            <Button variant="secondary" size="md">
              Button label
            </Button>
            <Button variant="secondary" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="outline" size="xl">
              Button label
            </Button>
            <Button variant="outline" size="lg">
              Button label
            </Button>
            <Button variant="outline" size="md">
              Button label
            </Button>
            <Button variant="outline" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button variant="ghost" size="xl">
              Button label
            </Button>
            <Button variant="ghost" size="lg">
              Button label
            </Button>
            <Button variant="ghost" size="md">
              Button label
            </Button>
            <Button variant="ghost" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button disabled variant="primary" size="xl">
              Button label
            </Button>
            <Button disabled variant="secondary" size="lg">
              Button label
            </Button>
            <Button disabled variant="outline" size="md">
              Button label
            </Button>
            <Button disabled variant="ghost" size="sm">
              Button label
            </Button>
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" size="xl">
              Button label
            </Button>
            <Button color="neutral" size="lg">
              Button label
            </Button>
            <Button color="neutral" size="md">
              Button label
            </Button>
            <Button color="neutral" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="secondary" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="secondary" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="outline" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="outline" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button color="neutral" variant="ghost" size="xl">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="lg">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="md">
              Button label
            </Button>
            <Button color="neutral" variant="ghost" size="sm">
              Button label
            </Button>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <Button disabled variant="primary" size="xl">
              Button label
            </Button>
            <Button disabled variant="secondary" size="lg">
              Button label
            </Button>
            <Button disabled variant="outline" size="md">
              Button label
            </Button>
            <Button disabled variant="ghost" size="sm">
              Button label
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
