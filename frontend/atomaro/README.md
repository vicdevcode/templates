# Vite + Atomaro

## Vim

Vim commands

```vim
:FSDIcon <name>
```

Example: `:FSDIcon solar-smile`

```vim
:FSDAdd <layer> <name>
```

Example: `:FSDAdd widget header`

Copy this to your vim config

```lua
-- user_commands
local function toCamelCase(str)
  return str:gsub("-%w", function(match)
    return match:sub(2):upper()
  end)
end

local function capitalizeFirst(str)
  return str:gsub("^%l", string.upper)
end

vim.api.nvim_create_user_command('FSDIcon', function(opts)
  local args = vim.split(opts.args, '%s+')
  local name = args[1]

  if not name then
    print("Usage: Add <name>")
    return
  end

  local base_dir = vim.fn.getcwd()
  local target_dir, file_name, component_name

  target_dir = base_dir .. '/src/shared/icons'
  component_name = capitalizeFirst(toCamelCase(name))
  local upper_name = name:gsub("^%l", string.upper)
  component_name = component_name .. 'Icon'
  file_name = name .. '.tsx'

  local file_content = string.format([[
import { FC } from "react";
import { IconProps } from ".";

export const %s: FC<IconProps> = () => {
  return (

  );
}]], component_name)

  local lines = vim.fn.readfile(target_dir .. '/index.ts')

  table.insert(lines, string.format([[export { %s } from "./%s";]], component_name, file_name))

  vim.fn.writefile(vim.split(file_content, '\n'), target_dir .. '/' .. file_name)
  vim.fn.writefile(lines, target_dir .. '/index.ts')

  vim.cmd('edit ' .. target_dir .. '/' .. file_name)

  vim.cmd('normal! 6G')
  vim.cmd('startinsert')
end, { nargs = 1 })

vim.api.nvim_create_user_command('FSDAdd', function(opts)

  local args = vim.split(opts.args, '%s+')
  local type = args[1]
  local name = args[2]
  if not type or not name then
    print("Usage: Add <type> <name> (type can be 'widget' or 'page' and etc)")
    return
  end

  local base_dir = vim.fn.getcwd()
  local target_dir, file_name, component_name

  if type == "widget" or type == "page" or type == "feature" then
    target_dir = base_dir .. '/src/' .. type .. 's/' .. name
    component_name = capitalizeFirst(toCamelCase(name))
    local upper_name = name:gsub("^%l", string.upper)
    local upper_type = type:gsub("^%l", string.upper)
    component_name = component_name .. upper_type
    file_name = component_name .. '.tsx'
  else
    print("Invalied type" .. type)
    return
  end

  -- Create the widget directory
  vim.fn.mkdir(target_dir, 'p')
  vim.fn.mkdir(target_dir .. '/ui', 'p')

  -- Create the widget file with content
  local file_content = string.format([[
import { FC } from "react";

export const %s: FC = () => {
  return ();
}]], component_name)

  local file_index_content = string.format([[
export { %s } from "./ui/%s";]], component_name, component_name)

  vim.fn.writefile(vim.split(file_content, '\n'), target_dir .. '/ui/' .. file_name)
  vim.fn.writefile(vim.split(file_index_content, '\n'), target_dir .. '/index.ts')

  -- Open the newly created file
  vim.cmd('edit ' .. target_dir .. '/ui/' .. file_name)

  vim.cmd('normal! 4G')
  vim.cmd('normal! f(l')
  vim.cmd('startinsert')
end, { nargs = 1 })
```
