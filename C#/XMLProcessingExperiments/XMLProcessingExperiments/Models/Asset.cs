using System;
namespace XMLProcessingExperiments
{
	public class Asset
	{
		public int AssetID { get; set; }
		public string AssetName { get; set; }
		public string AssetDescription { get; set; }
		public double AssetCurrentValue { get; set; }
		public double AssetAcquisitionValue { get; set; }
		public Asset()
		{
		}
	}
}

