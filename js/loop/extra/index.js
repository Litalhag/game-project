// 1
const movePlayer=(gameWorldGrid,currentPosition,direction)=>{
    if (direction='north'&& currentPosition.x>0) {
        currentPosition.x--;
    }
    if (direction='south'&& currentPosition.x<gameWorldGrid.length-1) {
        currentPosition.x++;
    }
    if (direction='east'&& currentPosition.y>0) {
        currentPosition.y--;
    }
    if (direction='west'&& currentPosition.y>gameWorldGrid[currentPosition.x].length-1) {
        currentPosition.y++;
    }
    return currentPosition;

}