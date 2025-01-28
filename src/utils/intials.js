export default function getInitials(firstName, lastName) {
    let firstLetter = firstName.charAt(0).toUpperCase();
    let secondLetter = lastName.charAt(0).toUpperCase();

    return firstLetter + secondLetter;
}