mod generator;

pub fn print_random_number() {
    let num = generator::generate();
    println!("Random number: {}", num);
}

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(feature = "first")]
pub fn first() {
    println!("First feature");
}

#[cfg(feature = "second")]
pub fn second() {
    println!("Second feature");
}

#[cfg(feature = "third")]
pub fn third() {
    println!("Third feature");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn it_not_works() {
        let result = add(2, 3);
        assert_ne!(result, 4);
    }
}
