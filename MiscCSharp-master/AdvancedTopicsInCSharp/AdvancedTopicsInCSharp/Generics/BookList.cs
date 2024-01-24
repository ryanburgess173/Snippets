using System;
namespace AdvancedTopicsInCSharp.Generics
{
	public class BookList
	{
		public void Add(Book book)
		{
			throw new NotImplementedException();
		}
		public Book this[int index]
		{
			get { throw new NotImplementedException(); }
		}
	}
	// There's 2 performance penalties associated with this solution for
	// multiple data types:
	// 1) when you want to pass an object into one of these class methods,
	//	  you're paying for the performance cost of boxing and unboxing it.
	// 2) casting say an integer to an object and object to an integer is
	//	  also costly.
	public class ObjectList
	{
		public void Add(object value)
		{

		}
		public object this[int index]
		{
			get { throw new NotImplementedException(); }
		}
	}

	public class GenericDictionary<TKey, TValue>
	{
		public void Add(TKey key, TValue value)
		{

		}
	}

	public class GenericList<T>
	{
		public void Add(T value)
		{

		}
		public T this[int index]
		{
			get { throw new NotImplementedException(); }
		}
	}
}

