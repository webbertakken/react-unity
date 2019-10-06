using System;
using System.Collections;
using System.Collections.Generic;
using Unity.Burst;
using Unity.Collections;
using Unity.Jobs;
using Unity.Mathematics;
using UnityEngine;

public class JobSystem1Testing : MonoBehaviour
{
  [SerializeField] private bool useJobs;

  // Update is called once per frame
  private void Update()
  {
    float startTime = Time.realtimeSinceStartup;
    if (useJobs)
    {
      NativeList<JobHandle> jobHandles = new NativeList<JobHandle>(Allocator.Temp);
      for (var i = 0; i < 10; i++)
      {
        var jobHandle = ReallyToughTaskJob();
        jobHandles.Add(jobHandle);
      }

      JobHandle.CompleteAll(jobHandles);
      jobHandles.Dispose();
    }
    else
    {
      for (var i = 0; i < 10; i++)
      {
        ReallyToughTask();
      }
    }

    Debug.Log($"{(Time.realtimeSinceStartup - startTime) * 1000f}ms");
  }

  private void ReallyToughTask()
  {
    // Represents a tough task like some pathfinding or complex calculation
    var value = 0f;
    for (var i = 0; i < 50000; i++)
    {
      value = math.exp10(math.sqrt(value));
    }
  }

  private JobHandle ReallyToughTaskJob()
  {
    var job = new ReallyToughJob1();
    return job.Schedule();
  }
}

[BurstCompile]
public struct ReallyToughJob1 : IJob
{
  public void Execute()
  {
    // Represents a tough task like some pathfinding or complex calculation
    var value = 0f;
    for (var i = 0; i < 50000; i++)
    {
      value = math.exp10(math.sqrt(value));
    }
  }
}
