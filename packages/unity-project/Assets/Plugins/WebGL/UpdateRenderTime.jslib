mergeInto(LibraryManager.library, {

  // Create a new function with the same name as the event listener
  UpdateRenderTime: function(duration) {

    // Within the function we're triggering the event within ReactUnityWebGL
    ReactUnityWebGL.UpdateRenderTime(duration);
  }
});
