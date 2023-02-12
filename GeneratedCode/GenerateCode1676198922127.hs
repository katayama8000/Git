

class Human a where
    name :: a -> String
    age :: a -> Int

data Programmer = Programmer {
    name :: String,
    age :: Int,
    language :: String
} deriving (Show)

instance Human Programmer where
    name = name
    age = age

isValidLanguage :: Programmer -> Bool
isValidLanguage (Programmer _ _ "Haskell") = True
isValidLanguage _ = False

main = do
    let programmer = Programmer "John" 25 "Haskell"
    print $ name programmer
    print $ age programmer
    print $ language programmer
    print $ isValidLanguage programmer