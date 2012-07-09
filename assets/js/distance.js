function distance(lat1,lat2,lon1,lon2) {
var R = 6371; // km
return Math.acos(Math.sin(lat1)*Math.sin(lat2) + 
                  Math.cos(lat1)*Math.cos(lat2) *
                  Math.cos(lon2-lon1)) * R;	
};

