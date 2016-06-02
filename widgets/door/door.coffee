class Dashing.Door extends Dashing.Widget


  ready: ->
    status = @get('doorstatus')
    console.log "door status: #{status}"
    @set('doorstatus', @status)
