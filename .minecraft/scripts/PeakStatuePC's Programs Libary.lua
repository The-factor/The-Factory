local page = 0
 
function rawread()
    for i=1, 2 do
        local event, param = os.pullEvent()
        if event == "key" then
            if param == 28 then
                print("enter")
                page = 1
                pages()
            end
            if param == 14 then
                page = 2
                pages()
            end
        end
    end
end
 
function iopress()
    page = io.read()
    page = tonumber(page)
    if page < 0 then
        page = 0
    end
    if page > 2 then
        page = 2
    end
    pages()
end
 
function pages()
    if page == 0 then
        term.clear()
        print("Operating systems")
        print("pastebin run UzGHLbNC  : Opus OS")
        print("pastebin get LRFsvuN3 PearOS.pkg  : PearOS")
        iopress()    
    end
 
    if page == 1 then
        term.clear()
        print("Games")
        print("wget run https://pinestore.cc/d/32 : Watermelon game")
        print("pastebin get wr2EyxxU Bream : Steam")
        print("wget https://github.com/LDDestroier/CC/raw/master/ldris.lua : Tetris")
        print("pastebin run RkjCL0k4 : Pong")
        print("pastebin run 6BcdRV75 : Doom")
        print("pastebin run FgAggvy1 : Terraria")
        iopress()    
    end
 
    if page == 2 then
        term.clear()
        print("Utilities")
        print("pastebin get 9b6m3ym1 install.lua : Power")
        print("pastebin run swsmNAf7 : Youtube")
        print("pastebin get nKyXwuuf wave-amp2 : Winamp")
        print("pastebin get cUYTGbpb bbpack : Packages")
        print("bbpack get CYRmLz78 Songs : Winamp songs")
        iopress()
    end
    
end
 
pages()
 
 
