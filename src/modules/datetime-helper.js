class DateTimeHelper {
    
    isDate = (fecha) => { 
        if (isNaN(Date.parse(fecha))){
            return false;
        } 
        else {
            return true;
        }
     };
    getEdadActual = (fechaNac) => { 
        let fechaN = new Date(fechaNac);
        const fechaHoy = new Date();
        let edad = fechaHoy.getFullYear() - fechaN.getFullYear();
        if ((fechaHoy.getMonth() < fechaN.getMonth()) || 
        (fechaHoy.getMonth() === fechaN.getMonth() && 
        fechaHoy.getDate() < fechaN.getDate())){
            edad --;
        } 
        return edad.toString();
     };
    getDiasHastaMiCumple = (fechaNac) => { 
        const fechaN = new Date(fechaNac);
        const fechaHoy = new Date();
        const proximoCumple = new Date(fechaHoy.getFullYear(), fechaN.getMonth(), fechaN.getDate());
        if (fechaHoy.getTime() > proximoCumple.getTime()){
            proximoCumple.setFullYear(fechaHoy.getFullYear() + 1);
        }
        const unDia = 1000 * 60 * 60 * 24;
        return (proximoCumple.getTime() - fechaHoy.getTime()) / unDia;
     };
    getDiaTexto = (fecha, abr) => { 
        const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
        const diasabr = ["Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"];
        fecha = new Date(fecha);
        let dia = fecha.getDay();
        if(abr){
            return diasabr[dia];
        }
        return dias[dia];
     };
    getMesTexto = (fecha, abr) => { 
        const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const mesesabr = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        fecha = new Date(fecha);
        let mes = fecha.getMonth();
        if(abr){
            return mesesabr[mes];
        }
        return meses[mes];
     };
}
    export default new DateTimeHelper;