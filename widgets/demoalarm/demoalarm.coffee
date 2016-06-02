class Dashing.Demoalarm extends Dashing.Widget

  cloudbitOutput: ->
    @set('status', !@status)
    if @status
      @postCloudbit(100)
    else
      @postCloudbit(0)

  postCloudbit: (value) ->
    $.ajax 'https://api-http.littlebitscloud.cc/v2/devices/YOURDEVICEID/output',
      type: 'POST'
      headers:
        'Authorization': 'Bearer YOURACCESSTOKEN',
        'Accept': 'application/vnd.littlebits.v2+json'
      data:
        'percent': value
        'duration_ms': -1
      error: (jqXHR, textStatus, errorThrown) ->
        console.log "AJAX error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        console.log "Successful AJAX call: #{data}"

  ready: ->
    @status = false
