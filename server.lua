RegisterNetEvent('sq-killfeed:server:update', function(suicide, killerName, killerID, killedName, weapon, headshot)
    local src = source
    kills = {} -- Reset the kills table

    --  if resultImage[1] then local img = resultImage[1].pfp end
      kills[#kills+1] = {
        suicide = suicide,
        killerName = killerName,
        killerID = killerID,
        killedName = killedName,
        killedID = src,
        weapon = weapon,
        headshot = headshot
      }

    --  print(suicide, killerName, killerID, killedName, src, weapon)

  TriggerClientEvent("sq-killfeed:client:update",-1,kills)
  end)