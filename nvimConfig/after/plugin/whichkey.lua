local wk = require("which-key")

wk.register({
  p = {
    name = "File search && go to explorer", -- optional group name
    f = { "Find project file" }, -- just a label. don't create any mapping
    s = { "Grep search project files" }, -- just a label. don't create any mapping
    v = { "Go to file explorer" },
 },
 a = { "Add file to harpoon" },
 h = { "Go to harpoon file 1" },
 j = { "Go to harpoon file 2" },
 k = { "Go to harpoon file 3" },
 l = { "Go to harpoon file 4" },
 u = { "Undo tree -> reverse changes" },
 g = { "Fugitive git search" },
 x = { "Diagnostics" },
}, { prefix = "<leader>" })
