window.addEventListener("message", function(event) { 
    const item = event.data;
    if(item.type === 'update') {
        for (var i = 0; i < item.Kills.length; i++) {
            
            var kill = item.Kills[i];
            var newRow;

            if(kill.suicide) { /* I suicide */
                if(kill.killedID == item.MyID) {
                newRow = 
                ` 
                <div class="killContainer died" style="display: none;">
                    <div class="skullPNG"><img src="images/skullandbones.png" alt=""></div>
                    <div class="killername">${kill.killerName}</div>
                </div>
                `;
} else {
    newRow = 
    ` 
    <div class="killContainer" style="display: none;">
        <div class="skullPNG"><img src="images/skullandbones.png" alt=""></div>
        <div class="killername">${kill.killerName}</div>
    </div>
    `;
}
            } else if(kill.killerID == item.MyID) { /* I Killed */
                if(kill.headshot) {
                newRow = 
                ` 
                <div class="killContainer kill" style="display: none;">
                    <div class="killername">${kill.killerName}</div>
                    <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
                     <div class="headshotPNG"><img src="images/csgo-headshot.png" alt=""></div>
                    <div class="killedname">${kill.killedName}</div>
                </div>
                `;
                } else {
                    newRow = 
                    ` 
                    <div class="killContainer kill" style="display: none;">
                        <div class="killername">${kill.killerName}</div>
                        <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
                        <div class="killedname">${kill.killedName}</div>
                    </div>
                    `;   
                }
            }  else if(kill.killedID == item.MyID) { /* I Died */
                if(kill.headshot) {
                newRow = 
                ` 
                <div class="killContainer died" style="display: none;">
                    <div class="killername">${kill.killerName}</div>
                    <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
                    <div class="headshotPNG"><img src="images/csgo-headshot.png" alt=""></div>
                    <div class="killedname">${kill.killedName}</div>
                </div>
                `;
} else {
    newRow = 
    ` 
    <div class="killContainer died" style="display: none;">
        <div class="killername">${kill.killerName}</div>
        <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
        <div class="killedname">${kill.killedName}</div>
    </div>
    `; 
}
            } else { /* Not Me At All */
                if(kill.headshot) {
                newRow = 
                ` 
                <div class="killContainer" style="display: none;">
                    <div class="killername">${kill.killerName}</div>
                    <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
                    <div class="headshotPNG"><img src="images/csgo-headshot.png" alt=""></div>
                    <div class="killedname">${kill.killedName}</div>
                </div>
                `;
                } else {
                    newRow = 
                    ` 
                    <div class="killContainer died" style="display: none;">
                        <div class="killername">${kill.killerName}</div>
                        <div class="weaponPNG"><img src="images/${kill.weapon}.png" alt=""></div>
                        <div class="killedname">${kill.killedName}</div>
                    </div>
                    `;    
                }
            }

            var $newRow = $(newRow);
            $('.killfeed').append($newRow);

            // Fade in the row, then fade out after 5 seconds
            $newRow.fadeIn(0).delay(6000).fadeOut(300, function() {
                $(this).remove();
            });
        }
    }
});
