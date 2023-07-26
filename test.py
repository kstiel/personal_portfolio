class Playlist:
        def __init__(self, title, singer):
                self.title = title
                self.singer = singer
            
        def __hash__(self):
                return hash((self.title, self.singer))
    
        def __eq__(self, other):
                return self.title == other.title and self.singer == other.singer
        
        def __repr__(self) -> str:
                return "Title: " + self.title + ", " "Singer: " + self.singer

playlist1 = [Playlist("a", "b"), Playlist("c", "d")]
playlist2 = [Playlist("c", "d"), Playlist("e", "f")]

print(set(playlist1) & set(playlist2))