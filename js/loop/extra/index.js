const movePlayer = (gameWorldGrid, currentPosition, direction) => {
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'north' && currentPosition.x > 0) { // CR - This should be if (direction === 'north' && currentPosition.x > 0)
        currentPosition.x--; // CR - This is correct for moving north
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'south' && currentPosition.x < gameWorldGrid.length - 1) { //CR - This should be if (direction === 'south' && currentPosition.x < gameWorldGrid.length - 1)
        currentPosition.x++; // CR - This is correct for moving south
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'east' && currentPosition.y > 0) { // CR - This should be if (direction === 'east' && currentPosition.y < gameWorldGrid[0].length - 1)
        currentPosition.y--; // CR - This should be currentPosition.y++ for moving east
    }
    // CR - Use the triple equals (===) for comparison, not the assignment operator (=)
    if (direction = 'west' && currentPosition.y > gameWorldGrid[currentPosition.x].length - 1) { // CR - This should be if (direction === 'west' && currentPosition.y > 0)
        currentPosition.y++; // CR - This should be currentPosition.y-- for moving west
    }
    return currentPosition;
}
