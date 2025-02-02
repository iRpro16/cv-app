export default function handleObjChange(array, propertyName, propertyValue, value) {
    const newObj = array.map(el => 
        el[propertyName] === propertyValue ? { ...el, [propertyName]: value } : el
    );
    return newObj;
}