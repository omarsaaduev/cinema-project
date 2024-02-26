export const formatMovieLength = (minutes,series) => {
    let hours = Math.floor(minutes/60);
    let minuts = minutes - hours*60;
    if(minutes){
        if(minuts==0) return `${hours}h`
        else if(hours==0) return `${minuts} min`
        return `${hours}h ${minuts}min`
    }
    else{
        return `${series? series: ''} series`
    }
}