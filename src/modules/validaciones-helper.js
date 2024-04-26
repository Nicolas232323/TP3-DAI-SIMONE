class ValidacionesHelper {
    getIntegerOrDefault = (value, defaultValue) => {
        if (isNaN(parseInt(value) || value == null)) return defaultValue;
        return parseInt(value);
};
    getStringOrDefault = (value, defaultValue) => {
        if (!isNaN(value) || value == null) return defaultValue;
        return String(value);
};
}
export default new ValidacionesHelper();