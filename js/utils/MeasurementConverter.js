class MeasurementConverter{

    static pixelToVh(px){

        px = parseFloat(px);
        var wh = window.innerHeight;

        return (px*100)/wh;
    }
}

export default MeasurementConverter;